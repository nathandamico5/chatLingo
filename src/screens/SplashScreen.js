import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatLingo</Text>
      <Button
        color="#ffffff"
        title="Login"
        onPress={() => navigation.navigate("LogInScreen")}
      />
      <Button
        color="#ffffff"
        title="Sign Up"
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C8EAD",
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
  },
});

export default SplashScreen;
