import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Creators from "./components/Creators";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
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
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}