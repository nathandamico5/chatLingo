import React, { useEffect, useRef } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { getMessages } from "../store/reducers/messages";
import Message from "./Message";

const MessagesList = ({ messages, getMessages }) => {
  useEffect(() => {
    getMessages();
  }, []);

  const scrollViewRef = useRef();
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
        {messages.length ? (
          messages.map((message, idx) => (
            <Message key={idx} message={message} />
          ))
        ) : (
          <Text>No Messages</Text>
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
    justifyContent: "space-between",
  },
});

const mapState = (state) => ({
  messages: state.messages,
});

const mapDispatch = (dispatch) => ({
  getMessages: () => dispatch(getMessages()),
});

export default connect(mapState, mapDispatch)(MessagesList);
