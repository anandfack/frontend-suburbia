import React, { useEffect, useState } from "react";

// import components
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";
import RecentShow from "../components/RecentShow";
import Roaster from "../components/Roaster";
import Merchandise from "../components/Merchandise";
import Gallery from "../components/Gallery";


const LandingPage = () => {

  return (
    <div className="max-w-[1440px] w-full">
      <Header />
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
