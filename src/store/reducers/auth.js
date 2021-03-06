import chatLingo from "../../api/chatLingo";
import { AsyncStorage } from "react-native";
import { getMessages } from "./messages";
import socket from "../../socket";

const TOKEN = "token";

// ACTION TYPES
const SET_AUTH = "SET_AUTH";

// ACTION CREATORS
const setAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

// THUNK CREATORS
export const getCurrentUser = () => async (dispatch) => {
  const token = await AsyncStorage.getItem(TOKEN);
  if (token) {
    const { data: user } = await chatLingo.get("/auth", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(user));
  }
};

export const signUp = (username, password, language) => {
  return async (dispatch) => {
    try {
      const { data: auth } = await chatLingo.post(`/auth/signup`, {
        username,
        password,
        language,
      });
      await AsyncStorage.setItem("token", auth.token);
      dispatch(getCurrentUser());

      socket.auth = { username };
      socket.connect();
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };
};

export const logIn = (username, password) => {
  return async (dispatch) => {
    try {
      const { data: auth } = await chatLingo.post(`/auth/login`, {
        username,
        password,
      });
      await AsyncStorage.setItem("token", auth.token);
      dispatch(getCurrentUser());

      socket.auth = { username };
      socket.connect();
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem("token");
    dispatch(setAuth({}));
  };
};

export const saveSettings = (language) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem(TOKEN);
    try {
      const { data: auth } = await chatLingo.put(
        `/auth`,
        {
          language,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(setAuth(auth));
      dispatch(getMessages());
    } catch (error) {
      throw error;
    }
  };
};

// Auth Reducer
const initialState = {};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};

export default authReducer;
