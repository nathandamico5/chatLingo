import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { signUp } from "../store/reducers/auth";

const SignUpScreen = ({ navigation, signUp, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      if (user.error) {
        Alert.alert("Sign Up attempt failed. Please try again.");
      } else if (user.id !== undefined) {
        navigation.navigate("ChatScreen");
      }
    }
  }, [user]);

  const handleSignUp = (username, password, langauge) => {
    signUp(username, password, langauge);
    setPassword("");
    setUsername("");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign Up</Text>
      <Picker
        style={styles.picker}
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        <Picker.Item color="#ffffff" label="English" value="en" />
        <Picker.Item color="#ffffff" label="Español" value="es" />
        <Picker.Item color="#ffffff" label="Français" value="fr" />
        <Picker.Item color="#ffffff" label="Deutsche" value="de" />
        <Picker.Item color="#ffffff" label="普通话" value="zh" />
        <Picker.Item color="#ffffff" label="عربى" value="ar" />
        <Picker.Item color="#ffffff" label="Italiano" value="it" />
        <Picker.Item color="#ffffff" label="日本語" value="ja" />
        <Picker.Item color="#ffffff" label="Swahili" value="sw" />
        <Picker.Item color="#ffffff" label="Tagalog" value="tl" />
      </Picker>
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
        onPress={() => handleSignUp(username, password, language)}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const mapState = (state) => ({
  user: state.auth,
});

const mapDispatch = (dispatch) => ({
  signUp: (username, password, language) =>
    dispatch(signUp(username, password, language)),
});

export default connect(mapState, mapDispatch)(SignUpScreen);

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
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    width: "90%",
  },
  picker: {
    padding: 10,
    marginBottom: 10,
    width: "90%",
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
