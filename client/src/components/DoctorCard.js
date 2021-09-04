import {
  Box,
  Paper,
  Typography,
  CardMedia,
  Button,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";

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

const DoctorCard = (props) => {
  // eslint-disable-next-line no-undef
  const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
  const {
    name,
    gender,
    experience,
    qualifications,
    fees,
    department,
    email,
    isOnline,
  } = props.doctorDetails;
  const img =
    gender === "M"
      ? "https://i.ibb.co/YQ4HvQP/male.jpg"
      : "https://i.ibb.co/ckP4Pn2/female.jpg";
  const [open, setOpen] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <Paper elevation={8}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography align="center" style={{ fontSize: 16, fontWeight: "bold" }}>
          {"Dr. " + name}
        </Typography>
        <CardMedia
          component="img"
          src={img}
          style={{ width: "64px" }}
        ></CardMedia>
        <Typography style={{ fontSize: 11 }}>
          {experience + " yrs. exp"}
        </Typography>
        <Typography style={{ fontSize: 11 }}>{qualifications}</Typography>
        <Typography style={{ fontSize: 14 }}>{"Fees: $" + fees}</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: 12, marginBottom: 10, marginTop: 3 }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Consult Now
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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              Pay {fees}
            </Typography>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </Box>
        </Modal>
      </Box>
    </Paper>
  );
};

export default DoctorCard;
