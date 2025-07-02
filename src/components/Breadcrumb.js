import React from "react";

const Breadcrumb = () => {
  return (
    <section className="md:mx-[190px] md:mt-[100px] md:mb-[45px]">
      <div className="flex items-center gap-[6px]">
        <p className="md:text-[15px] md:font-normal md:opacity-[50%] md:leading-[22.5px]">
          Home
        </p>
        <p className="md:text-[15px] md:font-normal md:opacity-[50%] md:leading-[22.5px]">
          /
        </p>
        <p className="md:text-[15px] md:font-normal md:text-white md:leading-[22.5px]">
          News
        </p>
      </div>
    </section>
  );
};

export default Breadcrumb;
