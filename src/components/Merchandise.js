import React from "react";

import ImageMerchandise1 from "../assets/img/image-merchandise-1.png";
import ImageMerchandise2 from "../assets/img/image-merchandise-2.png";
import ImageMerchandise3 from "../assets/img/image-merchandise-3.png";
import ImageMerchandise4 from "../assets/img/image-merchandise-4.png";

// import arrow
import { FaArrowRight } from "react-icons/fa";

const Merchandise = () => {
  return (
    <section className="lg:mx-[128px] lg:mb-[150px]">
      <div className="lg:mb-[67px]">
        <h1 className="text-secondary lg:text-[22px] lg:font-normal lg:leading-[33px] text-center lg:mb-4">
          Merchandise
        </h1>
        <h1 className="text-white font-secondary text-center lg:font-semibold lg:text-[44px] lg:leading-[50.908px]">
          Official Merchandise Suburbia East.
        </h1>
      </div>
      <div className="flex flex-row gap-[32px]">
        <div className="relative">
          <img
            className="rounded-[20px] w-[475px] h-[492px]"
            src={ImageMerchandise1}
            alt=""
          />
          <button class="absolute flex w-[180.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[18px] inset-y-[423px]">
            <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
              Beli Sekarang <FaArrowRight className="text-[13px]" />
            </p>
          </button>
        </div>
        <div>
          <div className="relative">
            <img
              className="rounded-[20px] w-[576px] h-[188px] lg:mb-[32px]"
              src={ImageMerchandise2}
              alt=""
            />
            <button class="absolute flex w-[180.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[18px] inset-y-[130px]">
              <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                Beli Sekarang <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
          <div className="flex flex-row gap-[32px]">
            <div className="relative">
              <img
                className="rounded-[20px] w-[272px] h-[272px]"
                src={ImageMerchandise3}
                alt=""
              />
              <button class="absolute flex w-[180.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[18px] inset-y-[209px]">
                <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                  Beli Sekarang <FaArrowRight className="text-[13px]" />
                </p>
              </button>
            </div>
            <div>
              <div className="relative">
                <img
                  className="rounded-[20px] w-[272px] h-[272px]"
                  src={ImageMerchandise4}
                  alt=""
                />
                <button class="absolute flex w-[180.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[18px] inset-y-[209px]">
                  <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                    Beli Sekarang <FaArrowRight className="text-[13px]" />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
