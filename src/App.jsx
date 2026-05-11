import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Creators from "./components/Creators";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Creators />
      <Footer />
    </div>
  );
}