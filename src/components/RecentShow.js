import React from "react";

import { useData } from "../context/LandingContext";

import { Link } from "react-router-dom";

import imageCover from "../assets/img/recent-show.png";

const RecentShow = () => {
  const { loading, recentShow } = useData();

  return (
    <>
      <section className="ml-[281px] mr-[281px] mb-[100px]">
        <div className="relative">
          <img
            src={imageCover}
            className="w-[878px] h-[225px] object-cover rounded-[25px]"
            alt=""
          />
          {recentShow.map((show) => {
            return (
              <div key={show.id}>
                <div className="absolute inset-x-[44px] inset-y-[71px] bottom-0">
                  <p className="lg:text-[24px] lg:font-bold lg:leading-[28px] lg:mb-0">
                    {show.title}
                  </p>
                  <p className="lg:text-[15px] lg:font-normal lg:leading-[17px] lg:mb-[11px]">
                    Recent Show from {show.organizer}
                  </p>
                  <Link
                    to={`show.slug`}
                    className="border border-white lg:text-[10px] lg:font-medium lg:leading-normal lg:rounded-[5px] lg:px-[10px] lg:py-[6px]"
                  >
                    See Show
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RecentShow;
