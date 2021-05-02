// import chatLingo from "../../api/chatLingo";
// import socket from "../../socket";

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
      dispatch(setChats({ 0: "General Chat" }));
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
