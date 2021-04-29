import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ content }) => {
  return (
    <View style={styles.blob}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blob: {
    backgroundColor: "#1d344e",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "50%",
  },
  text: {
    color: "#ffffff",
  },
});

export default Message;
