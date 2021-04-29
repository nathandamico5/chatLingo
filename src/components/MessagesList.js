import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getMessages } from "../store/reducers/messages";
import Message from "./Message";

class MessagesList extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <ScrollView style={styles.container}>
        {messages.length ? (
          messages.map((message, idx) => (
            <Message key={idx} content={message.content} />
          ))
        ) : (
          <Text>No Messages</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "90%",
  },
});

const mapState = (state) => ({
  messages: state.messages,
});

const mapDispatch = (dispatch) => ({
  getMessages: () => dispatch(getMessages()),
});

export default connect(mapState, mapDispatch)(MessagesList);
