import {
  Breadcrumbs,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const BreadCrumsTab = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Breadcrumbs>
          {props.links.map((link, index) => {
            if (index === props.links.length - 1) {
              return (
                <Typography color="textPrimary" key={index}>
                  {link}
                </Typography>
              );
            }
            return (
              <Link color="inherit" href="/" key={index}>
                {link}
              </Link>
            );
          })}
        </Breadcrumbs>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

export default BreadCrumsTab;
