import React from "react";

import { useData } from "../context/LandingContext";

const RecentShow = () => {
  const { loading, recentShow, baseUrl } = useData();

  return (
    <section className="bg-recentshow bg-no-repeat bg-cover lg:h-[743.74px] lg:mb-[157.76px]">
      <div className="lg:mx-[128px] w-[1184px] h-[634px] lg:mt-[59px] lg:rounded-[20px] lg:backdrop-blur-xl lg:border-[0.5px]">
        {loading ? (
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          recentShow.map((show, index) => {
            return (
              <div
                key={index}
                className="flex lg:flex-col lg:mt-[44px] lg:ml-[99px]"
              >
                <div className="lg:w-[491px] lg:h-[151px] lg:mb-[48px]">
                  <h1 className="text-secondary lg:text-[22px] lg:font-reguler lg:mb-[16px] lg:leading-[33px]">
                    Show
                  </h1>
                  <h1 className="lg:font-semibold lg:text-[44px] lg:text-white lg:leading-[50.91px] font-secondary">
                    Recent Show Of
                  </h1>
                  <h1 className="lg:font-semibold lg:text-[44px] lg:text-white lg:leading-[50.91px] font-secondary">
                    {show.title}
                  </h1>
                </div>
                <img
                  className="w-[576px] h-[319px]"
                  src={`${baseUrl}/${show.Images[0].imageUrl}`}
                  alt=""
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default RecentShow;
