import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { navigate } from "../screens/RootStackScreen";

const ChatListRow = ({ chat, chatID }) => {
  const chatAbrev = chat.substring(0, 2).toUpperCase();

  return (
    <TouchableOpacity
      style={styles.chatRow}
      onPress={() => navigate("ChatScreen", { contact: chatID })}
    >
      <View style={styles.abrev}>
        <Text style={styles.abrevText}>{chatAbrev}</Text>
      </View>
      <View>
        <Text style={styles.name}>{chat}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListRow;

const styles = StyleSheet.create({
  chatRow: {
    height: 75,
    borderBottomColor: "#1d344e",
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: "#999999",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  abrev: {
    backgroundColor: "#1d344e",
    color: "#ffffff",
    fontWeight: "bold",
    width: 50,
    padding: 10,
    marginRight: 10,
    textAlign: "center",
    borderRadius: 100,
  },
  abrevText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
