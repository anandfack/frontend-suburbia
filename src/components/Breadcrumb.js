import React from "react";

const Breadcrumb = () => {
  return (
    <section className="lg:mx-[128px] lg:mt-[100px] lg:mb-[50px]">
      <div className="flex items-center gap-[4px]">
        <p className="lg:text-[22px] lg:font-normal lg:opacity-[50%] lg:leading-[33px]">
          Home
        </p>
        <p className="lg:text-[22px] lg:font-normal lg:opacity-[50%] lg:leading-[33px]">
          >
        </p>
        <p className="lg:text-[22px] lg:font-normal lg:text-white lg:leading-[33px]">
          News
        </p>
      </div>
    </section>
  );
};

export default Breadcrumb;
