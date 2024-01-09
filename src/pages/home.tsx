import About from "../components/about";
import Card from "../components/card";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Card />
      <About />
      <Footer />
    </>
  );
};

export default Home;
