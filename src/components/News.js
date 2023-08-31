import React from "react";

// import components
import NewsSlider from "./NewsSlider";

const News = () => {
  return (
    <section className="lg:mt-[150px] lg:ml-[128px] lg:mb-[117px]">
      <div className="flex lg:flex-col mb-[45px]">
        <h1 className="text-secondary lg:font-reguler lg:text-[22px] leading-[33px]">
          News
        </h1>
        <h1 className="hero-font text-white lg:font-semibold lg:text-[44px] leading-[50.91px]">
          Explore Our News
        </h1>
      </div>
      <NewsSlider />
    </section>
  );
};

export default News;
