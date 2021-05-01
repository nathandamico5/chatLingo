import React, { useState, useEffect } from "react";
import { Alert, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logIn } from "../store/reducers/auth";

const LogInScreen = ({ navigation, logIn, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user.id) {
      navigation.navigate("ChatScreen");
    } else {
      Alert.alert("Log in attempt failed. Please try again.");
    }
  }, [user]);

  const handleLogIn = (username, password) => {
    logIn(username, password);
    setPassword("");
    setUsername("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        type="text"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        color="#ffffff"
        title="Log In"
        onPress={() => handleLogIn(username, password)}
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
    marginBottom: 20,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    width: "90%",
  },
});

const mapState = (state) => ({
  user: state.auth,
});

const mapDispatch = (dispatch) => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
});

export default connect(mapState, mapDispatch)(LogInScreen);
