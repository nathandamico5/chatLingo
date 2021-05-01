import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatLingo</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("LogInScreen")}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d344e",
  },
  title: {
    color: "#cccccc",
    fontSize: 50,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#cccccc",
    width: "40%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default SplashScreen;
