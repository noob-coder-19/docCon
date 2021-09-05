import React from "react";
import { Box, Button, Container, TextField } from "@material-ui/core";
import useChat from "../hooks/useChat";
import { useParams } from "react-router";
import "./ChatRoom.css";

const ChatRoom = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <Box
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "16px",
      }}
    >
      <h1 style={{ marginTop: "0px", paddingLeft: "16%" }}>Room: {roomId}</h1>
      <Container
        style={{
          width: "100%",
          overflow: "auto",
          height: "60vh",
          border: "1px solid",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <ol style={{ listStyleType: "none", padding: "0" }}>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </Container>
      <TextField
        placeholder="Type your message"
        variant="outlined"
        fullWidth
        value={newMessage}
        onChange={handleNewMessageChange}
      ></TextField>
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default ChatRoom;
