import Footer from "../components/shared/Footer";
import BreadcrumsTab from "../components/shared/BreadCrumsTab";
import FAQ from "../components/FAQ";
import SpecialityCards from "../components/SpecialityCards";

const Home = () => {
  return (
    <div>
      <BreadcrumsTab links={["Home", "Specialties"]}></BreadcrumsTab>
      <SpecialityCards></SpecialityCards>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
