import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import RootStackScreen from "./src/screens/RootStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/screens/RootStackScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
