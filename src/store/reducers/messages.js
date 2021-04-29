import chatLingo from "../../api/chatLingo";
// import socket from "../../socket";

// Action Types
const SET_MESSAGES = "GOT_MESSAGES";
const NEW_MESSAGE = "NEW_MESSAGE";
const RECIEVED_MESSAGE = "RECIEVED_MESSAGE";

// Action Creators
const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

const newMessage = (message) => ({
  type: NEW_MESSAGE,
  message,
});

export const recievedMessage = (message) => ({
  type: RECIEVED_MESSAGE,
  message,
});

// Thunks
export const getMessages = () => {
  return async (dispatch) => {
    try {
      const { data: messages } = await chatLingo.get("/messages");
      dispatch(setMessages(messages));
    } catch (error) {
      throw error;
    }
  };
};

export const sendMessage = (content) => {
  return async (dispatch) => {
    try {
      const { data: message } = await chatLingo.post("/messages", {
        message: content,
      });
      dispatch(newMessage(message));
      // socket.emit("new-message", message);
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
    case RECIEVED_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}
