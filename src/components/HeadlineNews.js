import React from "react";

import { useData } from "../context/NewsContext";
import { Link } from "react-router-dom";

const HeadlineNews = () => {
  const { headlineNews, baseUrl } = useData();
  return (
    <section className="mx-[128px] mb-[150px]">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          {headlineNews.map((news, index) => {
            return (
              <Link to={`/news/${news.id}`} key={index}>
                {index === 0 && (
                  <div className="relative">
                    <img
                      className="lg:w-[576px] lg:h-[654px] mb-2 lg:rounded-[12px] object-cover"
                      src={`${baseUrl}/${news.imageUrl}`}
                      alt={news.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-90% to-black" />

                    {news.title.split(" ").length > 5 ? (
                      <div className="lg:mx-[30px] lg:w-[496px] lg:h-[60px] inset-y-[527px] lg:leading-[43.4px] absolute flex">
                        <p className="text-white font-semibold justify-end lg:text-[40px]">
                          {news.title.split(" ").slice(0, 5).join(" ") +
                            " ...."}
                        </p>
                      </div>
                    ) : (
                      <div className="lg:mx-[30px] lg:w-[496px] lg:h-[60px] inset-y-[560px] absolute flex">
                        <p className="text-white font-semibold justify-end lg:text-[40px]">
                          {news.title}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="col-span-1 grid gap-8">
          {headlineNews.slice(1, 3).map((news, index) => (
            <Link to={`/news/${news.id}`} key={index}>
              <div className="relative">
                <img
                  className="lg:w-[576px] lg:h-[311px] lg:rounded-[12px] object-cover"
                  src={`${baseUrl}/${news.imageUrl}`}
                  alt={news.title}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-60% to-black" />
                {news.title.split(" ").length > 5 ? (
                  <div className="lg:mx-[20px] lg:w-[496px] lg:h-[60px] inset-y-[220px] absolute flex">
                    <p className="text-white text-lg lg:font-semibold lg:text-[40px] justify-end leading-[43px]">
                      {news.title.split(" ").slice(0, 5).join(" ") + " ...."}
                    </p>
                  </div>
                ) : (
                  <div className="lg:mx-[20px] lg:w-[496px] lg:h-[60px] inset-y-[220px] absolute flex">
                    <p className="text-white text-lg lg:font-semibold lg:text-[40px] justify-end leading-[43px]">
                      {news.title}
                    </p>
                  </div>
                )}
                {news.type === "press" && (
                  <div className="bg-secondary px-[7px] py-[5px] rounded-l-[5px] flex items-center absolute bottom-[21px] right-[22px]">
                    <p className="leading-normal font-semibold text-black text-[12px]">
                      Press Release
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeadlineNews;
