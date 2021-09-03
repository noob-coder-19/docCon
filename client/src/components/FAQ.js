import { Box, Typography } from "@material-ui/core";
import QA from "./QA";

const FAQ = () => {
  return (
    <Box style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 20 }}>
      <Typography variant="h4">Frequently Asked Questions (FAQ)</Typography>
      <QA></QA>
      <QA></QA>
      <QA></QA>
      <QA></QA>
      <QA></QA>
      <QA></QA>
      <QA></QA>
    </Box>
  );
};

export default FAQ;
