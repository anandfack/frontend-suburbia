import React from "react";

import { useData } from "../context/NewsContext";
import { Link } from "react-router-dom";

const HeadlineNews = () => {
  const { headlineNews, baseUrl } = useData();
  return (
    <section className="md:mx-[284px] md:mb-[100px]">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          {headlineNews.map((news, index) => {
            return (
              <Link to={`/news/${news.slug}`} key={index}>
                {index === 0 && (
                  <div className="relative">
                    <img
                      className="md:w-[420px] md:h-[420px] mb-2 lg:rounded-[12px] object-cover"
                      src={`${baseUrl}/${news.imageUrl}`}
                      alt={news.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-90% to-black" />

                    {news.title.split(" ").length > 5 ? (
                      <div className="md:mx-[10px] md:w-[300px] md:leading-[36px] md:h-[36px] inset-y-[360px] absolute flex">
                        <p className="text-white font-bold justify-end md:text-[24px]">
                          {news.title.split(" ").slice(0, 5).join(" ") +
                            " ...."}
                        </p>
                      </div>
                    ) : (
                      <div className="md:mx-[10px] md:w-[300px] md:leading-[36px] md:h-[36px] inset-y-[360px] absolute flex">
                        <p className="text-white font-bold justify-end md:text-[24px]">
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
            <Link to={`/news/${news.slug}`} key={index}>
              <div className="relative">
                <img
                  className="md:w-[422px] md:h-[197px] lg:rounded-[12px] object-cover"
                  src={`${baseUrl}/${news.imageUrl}`}
                  alt={news.title}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-60% to-black" />
                {news.title.split(" ").length > 4 ? (
                  <div className="lg:mx-[10px] lg:w-[300px] lg:h-[60px] inset-y-[125px] absolute flex">
                    <p className="text-white text-lg lg:font-bold lg:text-[24px] justify-end leading-[30px]">
                      {news.title.split(" ").slice(0, 4).join(" ") + " ...."}
                    </p>
                  </div>
                ) : (
                  <div className="lg:mx-[10px] lg:w-[146px] lg:h-[60px] inset-y-[125px] absolute flex">
                    <p className="text-white text-lg lg:font-bold lg:text-[24px] justify-end leading-[30px]">
                      {news.title}
                    </p>
                  </div>
                )}
                {news.type === "press" && (
                  <div className="bg-secondary px-[7px] py-[5px] rounded-[5px] flex items-center absolute bottom-[21px] right-[22px]">
                    <p className="leading-normal font-semibold text-black text-[8px]">
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
