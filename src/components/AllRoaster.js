import React from "react";

import { useData } from "../context/RoasterContext";
import { Link } from "react-router-dom";

const AllRoaster = () => {
  const { baseUrl, allRoaster } = useData();

  return (
    <section className="mx-[128px] mb-[50px]">
      <h1 className="lg:mb-[50px] lg:text-[40px] lg:leading-[60px] lg:font-bold">
        Roaster of Suburbia
      </h1>
      {allRoaster.map((item, index) => {
        return (
          <div
            key={index}
            className="lg:flex lg:gap-[33px] lg:mb-[111px] lg:items-center lg:w-[983px] "
          >
            <img
              className="lg:rounded-full lg:w-[272px] lg:h-[272px] object-center"
              src={`${baseUrl}/${item.imageUrl}`}
              alt={item.imageUrl}
            />
            <div>
              <h1 className="lg:text-[48px] lg:font-bold lg:leading-[72px] lg:mb-0">
                {item.nameBand}
              </h1>
              <p className="lg:text-4 text-white opacity-50 lg:font-medium lg:capitalize lg:mb-4 lg:leading-[24px]">
                {item.genre}, {item.city}
              </p>
              <p className="lg:text-4 text-white lg:font-medium lg:mb-4 lg:leading-[24px]">
                {item.description}
              </p>
              <div className="flex gap-[10px]">
                <Link
                  to={`${item.spotify}`}
                  className="lg:leading-[25.5px] lg:px-[15px] lg:py-[7px] lg:rounded-[7px] lg:text-[17px] lg:font-medium text-black  lg:bg-secondary"
                  target="_blank"
                >
                  Stream
                </Link>
                <Link
                  to={`${item.instagram}`}
                  className="lg:leading-[25.5px] lg:px-[15px] lg:py-[7px] lg:rounded-[7px] lg:text-[17px] lg:font-medium text-white border-[1px]"
                  target="_blank"
                >
                  Follow
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AllRoaster;
