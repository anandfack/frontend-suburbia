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
      <h1 className="text-secondary lg:text-[14px] lg:font-medium lg:leading-normal lg:mb-[10px] lg:text-center">
        Gallery
      </h1>
      <h1 className="text-white lg:text-[24px] lg:font-bold lg:leading-[28px] lg:mb-[30px] lg:text-center">
        Art Of Gallery of Suburbia East.
      </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <img
              className="w-[696px] h-[111px] rounded-[20px]"
              src={ImageGallery1}
              alt=""
            />
            <button class="absolute flex items-center w-[99px] h-[25px] py-[5px] px-[10px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[580px] inset-y-[75px]">
              <p className="text-white m-auto w-auto text-[10px] leading-normal flex items-center gap-[10px]">
                See Photos <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
          <div className="relative">
            <img
              className="w-[696px] h-[111px] rounded-[20px]"
              src={ImageGallery2}
              alt=""
            />
            <button class="absolute flex items-center w-[99px] h-[25px] py-[5px] px-[10px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[580px] inset-y-[75px]">
              <p className="text-white m-auto w-auto text-[10px] leading-normal flex items-center gap-[10px]">
                See Photos <FaArrowRight className="text-[13px]" />
              </p>
            </button>
          </div>
          <div className="relative">
            <img
              className="w-[696px] h-[111px] rounded-[20px]"
              src={ImageGallery3}
              alt=""
            />
            <button class="absolute flex items-center w-[99px] h-[25px] py-[5px] px-[10px] rounded-[50px] bg-primary opacity-[70%] bottom-0 inset-x-[580px] inset-y-[75px]">
              <p className="text-white m-auto w-auto text-[10px] leading-normal flex items-center gap-[10px]">
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
