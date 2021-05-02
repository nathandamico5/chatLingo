import chatLingo from "../../api/chatLingo";
import { AsyncStorage } from "react-native";
// import socket from "../../socket";

const TOKEN = "token";

// Action Types
const SET_CHATS = "SET_CHATS";

// Action Creators
export const setChats = (chats) => ({
  type: SET_CHATS,
  chats,
});

// Thunks
export const getChats = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      const { data: chats } = await chatLingo.get("/contacts", {
        headers: {
          authorization: token,
        },
      });
      const allChats = {
        0: "General Chat",
      };
      chats.map((chat) => {
        const chatID = chat.id;
        const username = chat.username;
        allChats[chatID] = username;
      });
      dispatch(setChats(allChats));
    } catch (error) {
      throw error;
    }
  };
};

// Chat Reducer
const initialState = {};
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHATS:
      return action.chats;
    default:
      return state;
  }
}
