// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Idea from "./pages/Idea";
import Researches from "./pages/Researches";
import AboutUs from "./pages/AboutUs";
import OurFuture from "./pages/OurFuture";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Workflow from "./components/Workflow";
import HeroSection from "./components/HeroSection"
import Pricing from "./components/Pricing";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Idea />} />
        <Route path="/researches" element={<Researches />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-future" element={<OurFuture />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default App;
