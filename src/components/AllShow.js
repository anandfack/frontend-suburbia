import React from "react";

import heroImage from "../assets/img/hero-image.png";
import Search from "./Search";

const AllShow = () => {
  return (
    <section className="lg:mx-[128px] lg:mb-[286px]">
      <h1 className="lg:text-[40px] lg:font-bold text-center lg:mb-[50px]">
        Recent Show of Suburbia
      </h1>
      <img
        className="lg:w-[1184px] lg:h-[474px] lg:object-contain"
        src={heroImage}
        alt=""
      />
      <Search />
    </section>
  );
};

export default AllShow;
