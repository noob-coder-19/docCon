import BreadCrumsTab from "../components/shared/BreadCrumsTab";
import Footer from "../components/shared/Footer";
import axios from "axios";
import dotenv from "dotenv";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";

dotenv.config();

const DoctorDashboard = (props) => {
  const [doctorName, setDoctorName] = useState("");
  const [isDoctorOnline, setIsDoctorOnline] = useState(false);
  const { department, email } = props.location.state;
  const {
    REACT_APP_ASTRA_DB_ID: databaseId,
    REACT_APP_ASTRA_DB_REGION: region,
    REACT_APP_ASTRA_DB_KEYSPACE: keyspaceId,
    REACT_APP_ASTRA_DB_APPLICATION_TOKEN: appToken,
  } = process.env;
  console.log(department, email);

  const doctor1 = "doctors_by_email";
  const doctor2 = "doctors_by_department";
  const url = `https://${databaseId}-${region}.apps.astra.datastax.com/api/rest/v2/keyspaces/${keyspaceId}/${doctor1}`;
  const url_ = `https://${databaseId}-${region}.apps.astra.datastax.com/api/rest/v2/keyspaces/${keyspaceId}/${doctor2}/${department}/${!isDoctorOnline}/${email}`;

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
      setIsDoctorOnline(response.data.data.isOnline);
    });
  };

  const updateOnlineStatus = async () => {
    await axios({
      method: "PATCH",
      url: url_,
      headers: {
        "X-Cassandra-Token": appToken,
      },
    });
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <div>
      <BreadCrumsTab links={["Home", "Doctor Dashboard"]} />
      <Typography variant="h2">Hello {doctorName}</Typography>
      <Button onClick={updateOnlineStatus} variant="contained">
        Take patients
      </Button>
      <Footer></Footer>
    </div>
  );
};

export default DoctorDashboard;
