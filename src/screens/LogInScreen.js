import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { logIn } from "../store/reducers/auth";

const LogInScreen = ({ navigation, logIn, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      if (user.id) {
        navigation.navigate("ChatListScreen");
      } else {
        Alert.alert("Log in attempt failed. Please try again.");
      }
    }
  }, [user]);

  const handleLogIn = (username, password) => {
    logIn(username, password);
    setPassword("");
    setUsername("");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        secureTextEntry={true}
        type="text"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleLogIn(username, password)}
      >
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const mapState = (state) => ({
  user: state.auth,
});

const mapDispatch = (dispatch) => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
});

export default connect(mapState, mapDispatch)(LogInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d344e",
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
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#cccccc",
    width: "90%",
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
