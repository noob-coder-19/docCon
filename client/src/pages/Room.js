import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, TextField } from "@material-ui/core";

const Room = (props) => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        position: "fixed",
        left: "10%",
        right: "10%",
        top: "50%",
        transform: "translate(-10%, -70%)",
        flexDirection: "column",
      }}
    >
      <TextField
        label="room id"
        variant="outlined"
        value={roomName}
        onChange={handleRoomNameChange}
        style={{
          fontSize: "24px",
        }}
      ></TextField>
      <Link
        style={{
          textDecoration: "none",
          padding: "24px 12px",
          fontSize: "28px",
          backGround: "#31a24c",
          color: "white",
          fontWeight: "600",
          textAlign: "center",
        }}
        to={`/${roomName}`}
      >
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Link>
    </Container>
  );
};

export default Room;
