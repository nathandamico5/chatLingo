import chatLingo from "../../api/chatLingo";
import socket from "../../socket";
import { AsyncStorage } from "react-native";
import axios from "axios";

const TOKEN = "token";

// Action Types
const SET_MESSAGES = "GOT_MESSAGES";
const NEW_MESSAGE = "NEW_MESSAGE";
const GOT_NEW_MESSAGE_FROM_SERVER = "GOT_NEW_MESSAGE_FROM_SERVER";

// Action Creators
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

const newMessage = (message) => ({
  type: NEW_MESSAGE,
  message,
});

export const gotNewMessageFromServer = (message) => {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message,
  };
};

export const NewMessageFromServer = (message) => {
  return async (dispatch, getState) => {
    const user = getState().auth;
    try {
      const { data: translation } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBBvb0nICbDMDAt-BB3IwxmaQBebf_Wve4",
        {
          q: `${message.content}`,
          target: `${user.language}`,
        }
      );
      const translatedMessage = translation.data.translations[0].translatedText;
      message.content = translatedMessage;
      if (message.userId !== user.id)
        dispatch(gotNewMessageFromServer(message));
    } catch (error) {
      throw error;
    }
  };
};

// Thunks
export const getMessages = () => {
  return async (dispatch, getState) => {
    const user = getState().auth;
    try {
      const { data: messages } = await chatLingo.get("/messages");
      const translatedMessages = await translateMessages(messages, user);
      dispatch(setMessages(translatedMessages));
    } catch (error) {
      throw error;
    }
  };
};

export const sendMessage = (content) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      const { data: message } = await chatLingo.post(
        "/messages",
        {
          message: content,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(newMessage(message));
      socket.emit("new-message", message);
    } catch (error) {
      throw error;
    }
  };
};

// Messages Reducers
const initialState = [];
export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    case NEW_MESSAGE:
      return [...state, action.message];
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return [...state, action.message];
    default:
      return state;
  }
}

// Translate Messages
export const translateMessages = async (messages, user) => {
  const translations = await Promise.all(
    messages.map(async (message) => {
      const { data: translation } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBBvb0nICbDMDAt-BB3IwxmaQBebf_Wve4",
        {
          q: `${message.content}`,
          target: `${user.language}`,
        }
      );
      const translatedMessage = translation.data.translations[0].translatedText;
      message.content = translatedMessage;
      return message;
    })
  );
  return translations;
};
