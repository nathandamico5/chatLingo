import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import messagesReducer from "./reducers/messages";
import { NewMessageFromServer } from "./reducers/messages";
import socket from "../socket";

// Sockets
socket.on("connect", () => {
  console.log(socket.id, "connected to the server!");
});

socket.on("new-message", (message) => {
  console.log(socket.id, "sent a message");
  store.dispatch(NewMessageFromServer(message));
});

// Comined Reducer
const appReducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

export default store;
