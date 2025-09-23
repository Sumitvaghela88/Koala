import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import { Footer } from "../src/Components/Footer";
import Home from "../src/Pages/Home"
import "./App.css"
import Hero from "./Components/HeroSection";

import WhyKoala from "./Components/why";
import AboutUsSection from "./Components/AboutUs";
import NewsletterSignup from "./Components/NewsLatter";
import Categories from "./Components/Categories";
import FeaturedCollection from "./Components/BestSeller";
import LogoCarousel from "./Components/LogoCarousel";
import MattressSection from "./Components/MostAwarded";
import Bestseller from "./Components/BestSeller";
import ProductShowcase from "./Components/NewArrivals";
import PromoPopup from "./Components/Popup";
import ChatButton from "./Components/Chatbutton";
function App() {
  return (
    <Router>
 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
   
      </Routes>
      {/* <Hero /> */}
      {/* <FeaturedCollection /> */}
          <Categories />
      <Bestseller />
      <LogoCarousel />
      <ProductShowcase/>
      <MattressSection />
  <PromoPopup />
  <ChatButton />
    <WhyKoala />
    <AboutUsSection />
    <NewsletterSignup />
  <Footer />
    </Router>
  );
}

export default App;
