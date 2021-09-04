import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Typography,
  Modal,
} from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SpecialtyCard = (props) => {
  const { title, img, summary, details, url } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Paper elevation={8}>
        <Box style={styles}>
          <Typography
            align="center"
            style={{ fontSize: 16, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <CardMedia
            component="img"
            src={img}
            style={{ width: "40px" }}
          ></CardMedia>
          <Typography style={{ fontSize: 13 }}>{summary}</Typography>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            style={{ fontSize: 9, marginBottom: 4, marginTop: 4 }}
            color="primary"
          >
            Click here to know more
          </Button>
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {summary}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {details}
              </Typography>
            </Box>
          </Modal>
          <Link to={url} href={url} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ fontSize: 10, marginBottom: 14, marginTop: 4 }}
            >
              See doctors
            </Button>
          </Link>
        </Box>
      </Paper>
    </div>
  );
};

export default SpecialtyCard;
