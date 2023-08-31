import React from "react";

import { headlineNews } from "../data";

const HeadlineNews = () => {
  return (
    <section className="lg:mx-[128px]">
      <div className="grid grid-cols-1 gap-4">
        {headlineNews.map((news, index) => {
          return (
            <div
              className={`${
                news.image ? "sm:row-span-1" : "sm:row-span-2"
              } grid grid-cols-2 gap-4`}
              key={index}
            >
              <img
                className="w-[250px] h-[250px]"
                src={news.image.type}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeadlineNews;
