import React, { useRef } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Message from "./Message";

const MessagesList = ({ messages, contact, user }) => {
  const scrollViewRef = useRef();
  const chatMessages = messages.filter((message) => {
    if (Number(contact) === 0) {
      return message.toID === 0;
    } else {
      return (
        (message.toID === Number(contact) ||
          message.userId === Number(contact)) &&
        (user.id === message.toID || user.id === message.userId)
      );
    }
  });

  return (
    <ScrollView
      style={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({
          animated: true,
        })
      }
    >
      <View style={styles.messages}>
        {chatMessages.length ? (
          chatMessages.map((message, idx) => (
            <Message key={idx} message={message} />
          ))
        ) : (
          <Text style={styles.empty}>No Messages</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: "#cccccc",
  },
  messages: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  empty: {
    alignSelf: "center",
    paddingTop: 20,
    fontSize: 20,
  },
});

const mapState = (state) => ({
  messages: state.messages,
  user: state.auth,
});

export default connect(mapState)(MessagesList);
