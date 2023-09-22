import React from "react";

import { useData } from "../context/NewsContext";

import { Link } from "react-router-dom";

const AllNews = () => {
  const { allNews, baseUrl } = useData();

  return (
    <section className="mx-[128px]">
      <h1 className="lg:text-[30px] lg:font-bold lg:leading-normal lg:mb-[50px]">
        What's New ?
      </h1>
      {allNews.map((item, index) => {
        return (
          <Link
            to={`/news/${item.id}`}
            key={index}
            className="flex gap-[54px] lg:mb-[50px] lg:pb-[50px] items-center border-b-[1px] lg:w-[760px] hover:cursor-pointer"
          >
            <img
              className="lg:rounded-[20px] lg:w-[250px] lg:h-[250px] object-cover"
              src={`${baseUrl}/${item.imageUrl}`}
              alt={item.imageUrl}
            />
            <div>
              {item.type === "news" ? (
                <p className="lg:text-[22px] lg:font-medium capitalize lg:leading-normal lg:text-secondary lg:mb-[10px]">
                  News
                </p>
              ) : (
                <p className="lg:text-[22px] lg:font-medium capitalize lg:leading-normal lg:text-secondary lg:mb-[10px]">
                  Press Release
                </p>
              )}

              <p className="lg:text-[22px] lg:font-medium lg:leading-normal lg:mb-[10px]">
                {item.title}
              </p>
              <p className="lg:text-4 lg:font-semibold lg:leading-normal lg:text-white opacity-50">
                Author {item.Author && item.Author.firstName}{" "}
                {item.Author && item.Author.lastName}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default AllNews;
