import React from "react";

// import image
import ImageGallery1 from "../assets/img/gallery-1.png";
import ImageGallery2 from "../assets/img/gallery-2.png";
import ImageGallery3 from "../assets/img/gallery-3.png";

// import icons
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <section className="lg:mb-[150px]">
      <div className="lg:mb-[42px]">
        <h1 className="text-secondary lg:text-[22px] lg:font-normal lg:leading-[33px] text-center lg:mb-4">
          Gallery
        </h1>
        <h1 className="text-white font-secondary text-center lg:font-semibold lg:text-[44px] lg:leading-[50.908px]">
          Art of Gallery
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <img
              className="w-[982px] h-[154px] rounded-[20px] "
              src={ImageGallery1}
              alt=""
            />
            <button class="absolute flex w-[157.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[802px] inset-y-[84px]">
              <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                See Photos <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
          <div className="relative">
            <img
              className="w-[982px] h-[154px] rounded-[20px]"
              src={ImageGallery2}
              alt=""
            />
            <button class="absolute flex w-[157.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[802px] inset-y-[84px]">
              <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                See Photos <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
          <div className="relative">
            <img
              className="w-[982px] h-[154px] rounded-[20px]"
              src={ImageGallery3}
              alt=""
            />
            <button class="absolute flex w-[157.19px] mb h-[46px] py-[10px] px-[20px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[802px] inset-y-[84px]">
              <p className="text-white m-auto w-auto text-[17px] leading-[22.5px] flex items-center gap-[10px]">
                See Photos <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
