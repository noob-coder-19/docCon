import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import doctorApp from "../auth/doctorAuth";
import {
  getAuth as getDoctorAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

const DoctorLogin = () => {
  const history = useHistory();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const doctorAuth = getDoctorAuth(doctorApp);

  const handleDoctorLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(doctorAuth, email, password)
      .then((user) => {
        history.push({
          pathname: "/doctor/dasboard",
          state: {
            department,
            email,
          },
        });
      })
      .catch((err) => {
        console.log(err);
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
            Login
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              defaultValue=""
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              <MenuItem value="Counseling">Counseling</MenuItem>
              <MenuItem value="Covid">Covid Consultation</MenuItem>
              <MenuItem value="Dentist">Dentist</MenuItem>
              <MenuItem value="Paediatrics">Paediatrics</MenuItem>
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Dermatology">Dermatology</MenuItem>
              <MenuItem value="Gastroenterology">Gastroenterology</MenuItem>
            </Select>
          </FormControl>
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
          <Button
            variant="contained"
            type="Submit"
            color="primary"
            onClick={handleDoctorLogin}
          >
            Login
          </Button>
          <Typography style={{ fontSize: 10, width: "100%" }} align="right">
            {" "}
            Are you a customer? <Link to="/user/login">Login here</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default DoctorLogin;
