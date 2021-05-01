import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const Message = ({ message, user }) => {
  return (
    <React.Fragment>
      {message.userId === user.id ? (
        <View style={styles.myMessageRow}>
          <View style={styles.mine}>
            <Text style={styles.text}>{message.content}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.otherMessageRow}>
          <View style={styles.toMe}>
            <Text style={styles.text}>{message.content}</Text>
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  myMessageRow: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  toMe: {
    backgroundColor: "#aaaaaa",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "60%",
  },
  mine: {
    backgroundColor: "#6C8EAD",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "60%",
  },
  text: {
    color: "#000000",
  },
});

const mapState = (state) => ({
  user: state.auth,
});

export default connect(mapState)(Message);
