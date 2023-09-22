import React from "react";

import { useData } from "../context/LandingContext";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Navigation } from "swiper";

const NewsSlider = () => {
  const { loading, exploreNews, format, endGB, baseUrl } = useData();

  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      className="productSlider"
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 57,
        },
      }}
    >
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
        exploreNews.map((news, index) => {
          const newsDate = new Date(news.date);
          const formattedDate = format(newsDate, "dd MMMM yyyy", {
            locale: endGB,
          });
          return (
            <SwiperSlide key={index}>
              <div className="bg-card lg:rounded-3xl lg:w-[373px] lg:h-[556px]">
                <img
                  className="mb-[25.5px] lg:rounded-t-3xl"
                  src={`${baseUrl}/${news.imageUrl}`}
                  alt=""
                />
                <div className="mx-[25px] mb-[17px]">
                  <p className="lg:mb-[7px] text-noto-sans opacity-50 lg:text-[14px] lg:font-reguler">
                    {formattedDate}
                  </p>
                  <h1 className="lg:text-[22px] lg:leading-[33px] lg:font-semibold lg:w-[202px]">
                    {news.title}
                  </h1>
                </div>
                <div className="mx-[25px]">
                  <button className="text-[17px] leading-[25.5px] lg:px-[20px] lg:py-[10px] border-[2px] rounded-[12px]">
                    Read News
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      )}
    </Swiper>
  );
};

export default NewsSlider;
