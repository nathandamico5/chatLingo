import io from "socket.io-client";
import store from "../store";
import { recievedMessage } from "../store/reducers/messages";
import { BASE_URL } from "../api/chatLingo";

const socket = new io.Socket();
socket.connect(BASE_URL);

// const socket = io(BASE_URL);

socket.on("connect", () => {
  console.log("I am now connected to the server!");

  socket.on("new-message", (message) =>
    store.dispatch(recievedMessage(message))
  );
});

export default socket;
