import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat to-black bg-cover lg:h-[715px] lg:bg-center">
      <div className="flex lg:flex-row">
        <div className="flex lg:flex-col lg:mt-[156px] lg:ml-[128px]">
          <p className="lg:text-[22px] lg:leading-[33px] lg:font-normal ">
            All The Fun Start Here
          </p>
          <h1 className="hero-font lg:text-white lg:text-[96px] lg:font-bold lg:leading-[117.5px]">
            Suburbia
          </h1>
          <h1 className="hero-font lg:text-white lg:text-[96px] lg:font-bold lg:leading-[117.5px]">
            <span className="hero-font text-secondary lg:font-bold lg:text-[96px]">
              .
            </span>
            east
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
