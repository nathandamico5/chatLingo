import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./ChatScreen";
import SplashScreen from "./SplashScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import SettingsScreen from "./SettingsScreen";
import ChatListScreen from "./ChatListScreen";

const RootStack = createStackNavigator();
export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current.navigate(name, params);
}

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <React.Fragment>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="LogInScreen"
          component={LogInScreen}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <RootStack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="ChatListScreen"
          component={ChatListScreen}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="ChatScreen"
          component={ChatScreen}
        />
        <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
      </React.Fragment>
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
