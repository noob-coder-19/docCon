import {
  createTheme,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Listings from "../Listings";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
  typography: {
    htmlFontSize: 20,
  },
});

const Footer = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <Grid
          container
          justifyContent="space-evenly"
          direction={isMd ? "row" : "column"}
          gap={6}
          style={{ paddingBottom: 6 }}
        >
          <Grid item links={["COMPANY", "About", "Experts and Spokesmodels"]}>
            <Listings
              links={["COMPANY", "About", "Experts and Spokesmodels"]}
            ></Listings>
          </Grid>
          <Grid item>
            <Listings
              links={[
                "CUSTOMER SERVICE",
                "Contact Us",
                "My Account",
                "Store Locator",
                "Redeem Rewards",
              ]}
            ></Listings>
          </Grid>
          <Grid item>
            <Listings
              links={[
                "MORE TO EXPLORE",
                "Beauty Magazine",
                "Tools and Consultations",
                "Offers",
                "#LorealParis",
              ]}
            ></Listings>
          </Grid>
        </Grid>
        <Divider></Divider>
        <Typography
          align="center"
          variant="caption"
          style={{ display: "block", padding: 8 }}
        >
          Copyright 2021. Hack n Rock
        </Typography>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

export default Footer;
