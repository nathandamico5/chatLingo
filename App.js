import "react-native-gesture-handler";
import React from "react";
import Chat from "./src/screens/Chat";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}
