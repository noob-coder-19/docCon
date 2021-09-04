import { useParams } from "react-router";
import DoctorCards from "../components/DoctorCards";
import FAQ from "../components/FAQ";
import BreadCrumsTab from "../components/shared/BreadCrumsTab";
import Footer from "../components/shared/Footer";
import Nav from "../components/shared/Nav";

const Speciality = () => {
  const { speciality } = useParams();
  const titles = {
    paediatrics: "Paediatrician",
    covid: "COVID Conusultant",
    counseling: "Psychiatrist",
    dermatology: "Dermatologist",
    cardiology: "Cardiologist",
    gastroenterology: "GI Medicine Specialist",
    dentist: "Dentist",
  };
  return (
    <div>
      <Nav />
      <BreadCrumsTab
        links={["Home", "Specialties", titles[speciality]]}
      ></BreadCrumsTab>
      <DoctorCards
        department={speciality[0].toUpperCase() + speciality.slice(1)}
      ></DoctorCards>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Speciality;
