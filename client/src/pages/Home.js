import Footer from "../components/shared/Footer";
import BreadcrumsTab from "../components/shared/BreadCrumsTab";

const Home = () => {
  return (
    <div>
      <BreadcrumsTab links={["Home", "Specialties"]}></BreadcrumsTab>
      <Footer></Footer>
    </div>
  );
};

export default Home;
