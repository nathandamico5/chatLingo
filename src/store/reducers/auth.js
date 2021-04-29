import chatLingo from "../../api/chatLingo";

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
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const { data: user } = await chatLingo.get("/auth", {
      headers: {
        authorization: token,
      },
    });
    console.log(user);
    return dispatch(setAuth(user));
  }
};

export const authenticate = (username, password, method) => {
  return async (dispatch) => {
    try {
      const { data: auth } = await chatLingo.post(`/auth/${method}`, {
        username,
        password,
      });
      window.localStorage.setItem(TOKEN, auth.token);
      dispatch(getCurrentUser());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    window.localStorage.removeItem(TOKEN);
    history.push("/login");
    dispatch(setAuth({}));
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
