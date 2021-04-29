import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import MessagesList from "../components/MessagesList";
import SendMessage from "../components/SendMessage";

class Chat extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ChatLingo</Text>
        <MessagesList />
        <SendMessage />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

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

export default Chat;
