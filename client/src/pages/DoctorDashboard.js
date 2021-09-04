import BreadCrumsTab from "../components/shared/BreadCrumsTab";
import Footer from "../components/shared/Footer";
import axios from "axios";
import dotenv from "dotenv";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";

dotenv.config();

const DoctorDashboard = (props) => {
  const [doctorName, setDoctorName] = useState("");
  const { department, email } = props.location.state;
  const {
    REACT_APP_ASTRA_DB_ID: databaseId,
    REACT_APP_ASTRA_DB_REGION: region,
    REACT_APP_ASTRA_DB_KEYSPACE: keyspaceId,
    REACT_APP_ASTRA_DB_APPLICATION_TOKEN: appToken,
  } = process.env;
  console.log(department, email);

  const doctor = "doctors_by_email";
  const url = `https://${databaseId}-${region}.apps.astra.datastax.com/api/rest/v2/keyspaces/${keyspaceId}/${doctor}`;

  const fetchDoctor = async () => {
    await axios({
      method: "GET",
      url,
      headers: {
        "X-Cassandra-Token": appToken,
      },
      params: {
        where: {
          department: { $eq: department },
          email: { $eq: email },
        },
      },
    }).then((response) => {
      setDoctorName(response.data.data.name);
    });
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <div>
      <BreadCrumsTab links={["Home", "Doctor Dashboard"]} />
      <Typography variant="h2">Hello {doctorName}</Typography>
      <Button>Take patients</Button>
      <Footer></Footer>
    </div>
  );
};

export default DoctorDashboard;
