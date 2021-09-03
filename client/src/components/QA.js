import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

const QA = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Question</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default QA;
