import React from "react";

import { useData } from "../context/LandingContext";

// import arrow
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Merchandise = () => {
  const { merchandise, baseUrl } = useData();
  return (
    <section className="lg:mx-[372px] lg:mb-[100px]">
      <h1 className="text-secondary lg:text-[14px] lg:font-medium lg:leading-normal lg:mb-[10px] lg:text-center">
        Merchandise
      </h1>
      <h1 className="text-white lg:text-[24px] lg:font-bold lg:leading-[28px] lg:mb-[30px] lg:text-center">
        Official Merchandise Suburbia East.
      </h1>
      <div className="flex lg:gap-[32px]">
        <div className="relative">
          {merchandise.map((item, index) => {
            return (
              <div key={index}>
                {index === 0 && (
                  <>
                    <img
                      src={`${baseUrl}/${item.imageMerchandises[0].imageUrl}`}
                      className="object-cover lg:w-[332px] lg:h-[332px] lg:rounded-[27px]"
                      alt=""
                    />
                    <Link
                      to={`/merchandise/${item.slug}`}
                      className="absolute flex gap-[10px] items-center text-center lg:w-[112px] lg:h-[25px] lg:px-[10px] lg:py-[5px] lg:rounded-[50px] bg-gray-900 bg-opacity-87 inset-y-[290px] inset-x-[203px]"
                    >
                      <p className="lg:text-[10px] lg:font-medium lg:leading-normal">
                        Beli Sekarang
                      </p>
                      <FaArrowRight className="lg:text-[10px] lg:font-medium lg:leading-normal" />
                    </Link>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:w-[332px] lg:h-[332px]">
          <div className="relative lg:mb-[32px]">
            {merchandise.map((item, index) => {
              return (
                <div key={index}>
                  {index === 1 && (
                    <>
                      <img
                        src={`${baseUrl}/${item.imageMerchandises[0].imageUrl}`}
                        alt=""
                        className="object-cover lg:w-[332px] lg:h-[150px] lg:rounded-[15px]"
                      />
                      <Link
                        to={`/merchandise/${item.slug}`}
                        className="absolute flex gap-[10px] items-center text-center lg:w-[112px] lg:h-[25px] lg:px-[10px] lg:py-[5px] lg:rounded-[50px] bg-gray-900 bg-opacity-87 inset-y-[108px] inset-x-[203px]"
                      >
                        <p className="lg:text-[10px] lg:font-medium lg:leading-normal">
                          Beli Sekarang
                        </p>
                        <FaArrowRight className="lg:text-[10px] lg:font-medium lg:leading-normal" />
                      </Link>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-[32px]">
            {merchandise.slice(2).map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <img
                    src={`${baseUrl}/${item.imageMerchandises[0].imageUrl}`}
                    alt=""
                    className="lg:w-[150px] lg:h-[150px] object-cover lg:rounded-[15px]"
                  />
                  <Link
                    to={`/merchandise/${item.slug}`}
                    className="absolute flex gap-[10px] items-center text-center lg:w-[112px] lg:h-[25px] lg:px-[10px] lg:py-[5px] lg:rounded-[50px] bg-gray-900 bg-opacity-87 inset-x-[16px] inset-y-[108px]"
                  >
                    <p className="lg:text-[10px] lg:font-medium lg:leading-normal">
                      Beli Sekarang
                    </p>
                    <FaArrowRight className="lg:text-[10px] lg:font-medium lg:leading-normal" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
