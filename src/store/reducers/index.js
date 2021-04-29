import { combineReducers } from "redux";
import authReducer from "./auth";
import messagesReducer from "./messages";

// Comined Reducer
const appReducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});

export default appReducer;
