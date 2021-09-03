import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

const UserLogin = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

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
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          ></TextField>
          <TextField
            label="Pasword"
            type="email"
            variant="outlined"
            fullWidth
          ></TextField>
          <Typography variant="body1" align="right" style={{ width: "100%" }}>
            <Button style={{ fontSize: 9 }}>Forgot Password?</Button>
          </Typography>
          <Button variant="contained" type="Submit" color="primary">
            Login
          </Button>
          <Typography style={{ fontSize: 10, width: "100%" }} align="right">
            {" "}
            Don't have an Account?{" "}
            <Link to="/user/register">Register here</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default UserLogin;
