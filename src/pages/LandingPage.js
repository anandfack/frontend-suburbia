import React from "react";

// import components
import Hero from "../components/Hero";
import News from "../components/News";
import RecentShow from "../components/RecentShow";
import Roaster from "../components/Roaster";
import Merchandise from "../components/Merchandise";
import Gallery from "../components/Gallery";

const LandingPage = () => {
  return (
    <div className="mb-[150px]">
      <Hero />
      <News />
      <RecentShow />
      <Roaster />
      <Merchandise />
      <Gallery />
    </div>
  );
};

export default LandingPage;
