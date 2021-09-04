import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

// https://i.ibb.co/ckP4Pn2/female.jpg
// https://i.ibb.co/YQ4HvQP/male.jpg

const DoctorCards = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [doctorList, setDoctorList] = useState([]);
  const {
    REACT_APP_ASTRA_DB_ID: databaseId,
    REACT_APP_ASTRA_DB_REGION: region,
    REACT_APP_ASTRA_DB_KEYSPACE: keyspaceId,
    REACT_APP_ASTRA_DB_APPLICATION_TOKEN: appToken,
  } = process.env;

  const doctor = "doctors_by_department";
  const url = `https://${databaseId}-${region}.apps.astra.datastax.com/api/rest/v2/keyspaces/${keyspaceId}/${doctor}`;

  const getDoctorData = () => {
    axios({
      url,
      method: "GET",
      headers: {
        "X-Cassandra-Token": appToken,
      },
      params: {
        where: { department: { $eq: props.department } },
      },
    })
      .then((response) => {
        setIsLoading(false);
        setDoctorList(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  if (isLoading) {
    return <CircularProgress color="secondary" size={60}></CircularProgress>;
  } else {
    return (
      <div style={{ paddingRight: 16, paddingLeft: 16 }}>
        <Typography variant="h4">Choose from a variety of doctors</Typography>
        <Grid
          container
          spacing={2}
          style={{ marginBottom: 24, marginTop: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          {doctorList.map((doctor, index) => {
            return (
              <Grid item xs={6} md={3} key={index}>
                <DoctorCard doctorDetails={doctor}></DoctorCard>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
};

export default DoctorCards;
