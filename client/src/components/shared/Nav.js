import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Nav = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              align={!isMd ? "center" : "left"}
              style={{ color: "white" }}
            >
              docCon
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={6}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              About Us
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </Link>
            <Button variant="contained" style={{ fontSize: 10 }}>
              {" "}
              Log In
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
