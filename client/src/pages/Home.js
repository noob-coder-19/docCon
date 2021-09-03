import Footer from "../components/shared/Footer";
import BreadcrumsTab from "../components/shared/BreadCrumsTab";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <BreadcrumsTab links={["Home", "Specialties"]}></BreadcrumsTab>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
