import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
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
      <Text style={styles.title}>ChatLingo</Text>
      <Button title="Log Out" onPress={() => handleLogOut()} />
      <MessagesList />
      <SendMessage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    height: "100%",
  },
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatch)(Chat);
