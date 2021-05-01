import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./ChatScreen";
import SplashScreen from "./SplashScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <React.Fragment>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="ChatScreen" component={ChatScreen} />
      </React.Fragment>
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
