import React, { useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getMessages } from "../store/reducers/messages";
import { connect } from "react-redux";
import ChatListRow from "../components/ChatListRow";
import { getChats } from "../store/reducers/chats";

const ChatListScreen = ({ navigation, getMessages, chats, getChats }) => {
  useEffect(() => {
    getMessages();
    getChats();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.btnText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.chatList}>
        {Object.keys(chats).map((chat) => (
          <ChatListRow key={chat} chat={chats[chat]} chatID={chat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapState = (state) => ({
  chats: state.chats,
});

const mapDispatch = (dispatch) => ({
  getMessages: () => dispatch(getMessages()),
  getChats: () => dispatch(getChats()),
});

export default connect(mapState, mapDispatch)(ChatListScreen);

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cccccc",
    padding: 10,
    width: "75%",
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1d344e",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  chatList: {
    backgroundColor: "#cccccc",
    height: "100%",
  },
  btn: {
    width: "25%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#cccccc",
    fontWeight: "bold",
    fontSize: 15,
  },
});
