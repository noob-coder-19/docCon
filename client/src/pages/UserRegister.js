import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import app from "../auth/userAuth";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useState } from "react";

const colSyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const rowSyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const UserRegister = () => {
  const history = useHistory();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const auth = getAuth(app);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(email, password).then((user) => {
      history.push("/");
    });
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.ibb.co/c33PmsP/hush-naidoo-jade-photography-ZCO-5-Y29s8k-unsplash.jpg")',
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs" style={isMd ? rowSyles : colSyles}>
        <Box
          component="form"
          style={{
            ...colSyles,
            backgroundColor: "white",
            gap: "10px",
            width: "100%",
            padding: "10px",
          }}
        >
          <Typography variant="h4" align="center">
            Register
          </Typography>
          <TextField
            label="First Name"
            type="text"
            variant="outlined"
            fullWidth
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          ></TextField>
          <TextField
            label="Last Name"
            type="text"
            variant="outlined"
            fullWidth
            value={lName}
            onChange={(e) => {
              setLName(e.target.value);
            }}
          ></TextField>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <TextField
            label="Pasword"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextField>
          <Typography variant="body1" align="right" style={{ width: "100%" }}>
            <Button style={{ fontSize: 9 }}>Forgot Password?</Button>
          </Typography>
          <Button variant="contained" type="Submit" color="primary">
            Register
          </Button>
          <Typography style={{ fontSize: 10, width: "100%" }} align="right">
            {" "}
            Alreadly have an Account? <Link to="/user/login">Login</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default UserRegister;
