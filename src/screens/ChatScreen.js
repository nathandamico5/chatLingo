import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import MessagesList from "../components/MessagesList";
import SendMessage from "../components/SendMessage";

const Chat = ({ navigation, route }) => {
  const contactID = route.params.contact;
  const chatName = route.params.username;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("ChatListScreen")}
        >
          {chatName}
        </Text>
      </View>
      <KeyboardAvoidingView behavior="position">
        <MessagesList contact={contactID} />
        <SendMessage contact={contactID} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cccccc",
    padding: 10,
    width: "75%",
    textTransform: "capitalize",
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
});

export default Chat;
