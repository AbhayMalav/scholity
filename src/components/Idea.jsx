import React from "react";
import Problem from "./Problem";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import Workflow from "./Workflow";
import HeroSection from "./HeroSection"
import Pricing from "./Pricing";

const Idea = () => {
  return (
    
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <SocialLinks />
      <Footer />
      </div>
    
  );
};

export default Idea;
