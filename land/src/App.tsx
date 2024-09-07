import "./App.css";
import AboutUs from "./components/PageBlocks/AboutUs";
import Banner from "./components/PageBlocks/Banner";
import Examples from "./components/PageBlocks/Examples";
import Footer from "./components/PageBlocks/Footer";

function App() {
  return (
    <section className="main">
      <Banner />
      <AboutUs />
      <Examples />
      <Footer />
    </section>
  );
}

export default App;
