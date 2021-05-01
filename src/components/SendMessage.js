import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { sendMessage } from "../store/reducers/messages";

const initialState = {
  message: "",
};
class SendMessage extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.nativeEvent.text,
    });
  }

  sendMessage() {
    const message = this.state.message.trim();
    if (message) {
      this.props.sendMessage(this.state.message);
      this.setState(initialState);
    }
  }

  render() {
    return (
      <View style={styles.sendMessage}>
        <TextInput
          style={styles.input}
          value={this.state.message}
          type="text"
          placeholder="Send A Message..."
          onSubmitEditing={this.sendMessage}
          onChange={this.handleChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
});

const mapDispatch = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatch)(SendMessage);
