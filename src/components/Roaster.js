import React from "react";

import { Link } from "react-router-dom";

import { useData } from "../context/LandingContext";

const Roaster = () => {
  const { roaster, loading, baseUrl } = useData();

  return (
    <section className="lg:mx-[190px] lg:mb-[100px]">
      <div className="lg:mb-[30px]">
        <h1 className="text-secondary lg:text-[14px] lg:font-medium lg:leading-normal text-center lg:mb-[10px]">
          Roaster
        </h1>
        <h1 className="text-white text-center lg:font-bold lg:text-[24px] lg:leading-[28px]">
          Roaster of Suburbia
        </h1>
      </div>

      <div className="flex gap-7 flex-wrap w-auto">
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
          roaster.map((roaster, index) => {
            return (
              <div
                className="lg:w-[332px] bg-card lg:rounded-[10px] lg:h-[117px]"
                key={index}
              >
                <div className="flex flex-row items-center mt-[17px]">
                  <img
                    className=" ml-[22px] w-[83px] h-[83px] rounded-[7px]"
                    src={`${baseUrl}/${roaster.imageUrl}`}
                    alt=""
                  />
                  <div className="ml-[15px]">
                    <h1 className="font-secondary text-white text-[18px] leading-[21px] font-semibold mb-0">
                      {roaster.nameBand}
                    </h1>
                    <h1 className="text-[14px] lg:font-normal lg:leading-[16px] lg:mb-[10px]">
                      {roaster.genre}, {roaster.city}
                    </h1>
                    <div className="flex flex-row gap-[10px]">
                      <Link
                        to={`${roaster.spotify}`}
                        className="bg-secondary border-black text-primary lg:text-[10px] lg:leading-normal lg:font-medium px-[7px] py-[5px] rounded-[5px]"
                        target="_blank"
                      >
                        Stream
                      </Link>
                      <Link
                        to={`${roaster.instagram}`}
                        className="text-white px-[7px] py-[5px] lg:text-[10px] lg:leading-normal lg:font-medium rounded-[5px] border border-white"
                        target="_blank"
                      >
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Roaster;
