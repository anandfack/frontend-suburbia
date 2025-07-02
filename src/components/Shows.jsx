import React from "react";

import { useData } from "../context/DropdownContext";

import { Link } from "react-router-dom";

const Shows = ({ shows }) => {
  const { baseUrl, endGB, format } = useData();
  const { title, slug, artist, location, city, date, Category, Images } = shows;
  console.log(shows);
  const showsDate = new Date(date);
  const formattedDate = format(showsDate, "dd MMMM yyyy", {
    locale: endGB,
  });

  const defaultImage = Images.find((image) => image.isDefault === true);

  const imageUrl = defaultImage ? `${baseUrl}/${defaultImage.imageUrl}` : "";

  return (
    <div className="flex flex-row gap-[34px] lg:mb-[54px] items-center">
      <img
        className="lg:w-[369px] lg:h-[369px] object-cover"
        src={imageUrl}
        alt="gambar om"
      />
      <div>
        <h1 className="lg:text-[48px] lg:font-bold lg:leading-normal lg:mb-0">
          {title}
        </h1>
        <p className="lg:text-[16px] lg:font-semibold lg:leading-normal lg:opacity-50 lg:mb-[25px]">
          {Category.name}
        </p>
        <p className="lg:text-[25px] lg:font-semibold lg:leading-normal lg:mb-0">
          Performer :
        </p>
        <p className="lg:text-[25px] lg:font-semibold lg:leading-normal lg:mb-[10px] lg:max-w-[611px]">
          {artist}
        </p>
        <p className="lg:text-[16px] lg:font-semibold lg:leading-normal lg:mb-[5px]">
          Time and Date :
        </p>
        <p className="lg:text-[16px] lg:font-semibold lg:leading-normal lg:mb-[15px]">
          {formattedDate} | At {location}, {city}
        </p>
        <Link
          to={`/show/${slug}`}
          className="lg:bg-secondary lg:text-black lg:px-[15px] lg:py-[7px] lg:text-[17px] lg:leading-normal lg:font-medium lg:rounded-[7px]"
        >
          See Event
        </Link>
      </div>
    </div>
  );
};

export default Shows;
