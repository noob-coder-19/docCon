import { ListItem } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

const firstItem = {
  fontWeight: "bold",
  mb: 4,
  letterSpacing: "2px",
};

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: 1,
};

const Listings = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box style={{ styles }}>
      {props.links.map((link, index) => {
        return (
          <ListItem
            sx={{ display: "block" }}
            disableGutters={isMd}
            style={index === 0 ? firstItem : { letterSpacing: "2px" }}
            divider={index === 0}
            key={index}
          >
            <Typography
              align="center"
              style={index === 0 ? firstItem : { letterSpacing: "2px" }}
            >
              {link}
            </Typography>
          </ListItem>
        );
      })}
    </Box>
  );
};

export default Listings;
