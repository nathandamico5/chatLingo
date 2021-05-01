import React, { useRef } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Message from "./Message";

const MessagesList = ({ messages }) => {
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
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

const mapState = (state) => ({
  messages: state.messages,
});

export default connect(mapState)(MessagesList);
