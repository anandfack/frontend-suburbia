import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "../configs/axios";

import { useData } from "../context/DetailShowContext";

function DetailPage() {
  const { id } = useParams();

  const { showDetail, baseUrl, format, enGB, setShowDetail } = useData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/recent-show-page/${id}`);
        const showDetailData = response.data[0].payload.data;

        setShowDetail(showDetailData.detailShow);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id, setShowDetail]);

  let formattedNewsDate = "";

  if (showDetail && showDetail.date) {
    const newsDate = new Date(showDetail.date);
    if (!isNaN(newsDate)) {
      formattedNewsDate = format(newsDate, "dd MMMM yyyy", {
        locale: enGB,
      });
    } else {
      formattedNewsDate = "Tanggal tidak valid";
    }
  } else {
    formattedNewsDate = "Tanggal tidak valid";
  }

  return (
    <section className="mx-[128px]">
      <h1 className="lg:text-[40px] lg:text-center lg:font-bold lg:mb-[50px]">
        {showDetail && showDetail.title}
      </h1>
      <div className="lg:mb-[100px] lg:mx-[128px]">
        {showDetail &&
          showDetail.Images &&
          showDetail.Images[0] &&
          showDetail.Images[0].imageUrl && (
            <img
              className="lg:w-[1184px] lg:h-[474px] object-cover"
              src={`${baseUrl}/${showDetail.Images[0].imageUrl}`}
              alt=""
            />
          )}
      </div>
      <div className="lg:mx-[128px]">
        <p className="lg:text-[32px] lg:font-medium lg:leading-normal lg:mb-[30px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="lg:mb-0 lg:font-semibold lg:text-[25px] lg:leading-normal">
          Performer :
        </p>
        <p className="lg:mb-[20px] lg:font-semibold lg:text-[25px] lg:leading-normal">
          {showDetail && showDetail.artist}
        </p>
        <div className="flex gap-[191px] lg:mb-[50px]">
          <div>
            <p className="lg:mb-0 lg:font-semibold lg:text-[25px] lg:leading-normal">
              Location :
            </p>
            <p className="lg:mb-[20px] lg:font-semibold lg:text-[25px] lg:leading-normal">
              {showDetail && showDetail.location}
            </p>
          </div>
          <div>
            <p className="lg:mb-0 lg:font-semibold lg:text-[25px] lg:leading-normal">
              Date :
            </p>
            <p className="lg:mb-[20px] lg:font-semibold lg:text-[25px] lg:leading-normal">
              {showDetail && formattedNewsDate}
            </p>
          </div>
        </div>
        <div
          className="lg:text-[20px] lg:font-normal lg:leading-normal max-w-screen lg:mb-[100px]"
          dangerouslySetInnerHTML={{
            __html: showDetail
              ? showDetail.description
              : "Deskripsi tidak tersedia",
          }}
        ></div>

        <h1 className="lg:text-[40px] lg:font-bold lg:leading-normal">Gallery of {showDetail && showDetail.title}</h1>
      </div>
    </section>
  );
}

export default DetailPage;
