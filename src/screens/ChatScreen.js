import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MessagesList from "../components/MessagesList";
import SendMessage from "../components/SendMessage";
import { connect } from "react-redux";
import { logout } from "../store/reducers/auth";

const Chat = ({ navigation, logout }) => {
  const handleLogOut = () => {
    logout();
    navigation.navigate("SplashScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ChatLingo</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.btnText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleLogOut()}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior="position">
        <MessagesList />
        <SendMessage />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cccccc",
    padding: 10,
    width: "50%",
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1d344e",
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    width: "25%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#cccccc",
    fontWeight: "bold",
    fontSize: 15,
  },
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatch)(Chat);
