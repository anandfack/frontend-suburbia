import React from "react";

import Logo from "../assets/img/hero-image-mobile.png";

const Hero = () => {
  return (
    <>
      <section className="bg-hero bg-no-repeat to-black bg-cover lg:h-[715px] lg:bg-center hidden md:block">
        <div className="flex lg:flex-row">
          <div className="flex lg:flex-col lg:mt-[156px] lg:mx-[188px]">
            <p className="lg:text-[22px] opacity-80 lg:mb-[7px] lg:leading-normal lg:font-medium">
              All The Fun Start Here
            </p>
            <h1 className=" lg:text-white lg:text-[96px] lg:w-[447px] lg:font-semibold lg:leading-[86px]">
              Suburbia{" "}
              <span className="text-secondary lg:font-semibold lg:text-[96px]">
                .
              </span>
              east
            </h1>
          </div>
        </div>
      </section>
      <section className="relative hidden">
        <img className="h-[502px] w-[1012px] absolute" src={Logo} alt="suburbia-logo" />
      </section>
    </>
  );
};

export default Hero;
