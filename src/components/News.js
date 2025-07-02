import React from "react";

// import components
import NewsSlider from "./NewsSlider";

const News = () => {
  return (
    <section className="lg:mt-[50px] lg:mx-[190px] w-auto lg:mb-[100px]">
      <div className="flex lg:flex-col mb-[45px]">
        <h1 className="text-secondary lg:font-reguler lg:text-[14px] leading-normal lg:mb-[10px]">
          News
        </h1>
        <h1 className="hero-font text-white lg:font-semibold lg:text-[24px] leading-[27.768px]">
          Explore Our News
        </h1>
      </div>
      <NewsSlider />
    </section>
  );
};

export default News;
