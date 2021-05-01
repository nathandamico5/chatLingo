import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Picker,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { signUp } from "../store/reducers/auth";

const SignUpScreen = ({ navigation, signUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSignUp = (username, password, langauge) => {
    try {
      signUp(username, password, langauge);
      navigation.navigate("ChatScreen");
      setPassword("");
      setUsername("");
    } catch (error) {
      Alert.alert("Sign Up attempt failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <Picker
        style={styles.picker}
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="français" value="fr" />
        <Picker.Item label="Deutsche" value="de" />
        <Picker.Item label="普通话" value="zh" />
        <Picker.Item label="عربى" value="ar" />
      </Picker>
      <Button
        color="#ffffff"
        title="Sign Up"
        onPress={() => handleSignUp(username, password, language)}
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
  picker: {
    padding: 10,
    marginBottom: 10,
    width: "90%",
  },
});

const mapDispatch = (dispatch) => ({
  signUp: (username, password, language) =>
    dispatch(signUp(username, password, language)),
});

export default connect(null, mapDispatch)(SignUpScreen);
