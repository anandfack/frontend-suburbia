import React, { useEffect } from "react";

import { FaRegClock } from "react-icons/fa";
import { useParams } from "react-router-dom";

import axios from "../configs/axios";

import { useData } from "../context/DetailNewsContext";

function DetailPage() {
  const { id } = useParams();

  const {
    newsDetail,
    recommendNews,
    baseUrl,
    format,
    enGB,
    setNewsDetail,
    setRecommendNews,
  } = useData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/news-page/${id}`);
        const newsDetailData = response.data[0].payload.data;

        setNewsDetail(newsDetailData.detailNews);
        setRecommendNews(newsDetailData.news);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id, setNewsDetail, setRecommendNews]);

  let formattedNewsDate = "";

  if (newsDetail && newsDetail.date) {
    const newsDate = new Date(newsDetail.date);
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
      {/* Title */}
      <h1 className="lg:text-[40px] lg:leading-normal lg:font-bold lg:w-[991px] lg:mb-[33px]">
        {newsDetail && newsDetail.title}
      </h1>

      {/* section image, author, all news */}
      <div className="flex items-center gap-[130px] lg:mb-[50px]">
        <div className="lg:mb-[50px]">
          {/* Author */}
          <div className="flex items-center gap-5 lg:mb-[50px]">
            <div>
              {newsDetail &&
                newsDetail.Author &&
                newsDetail.Author.profilePhoto && (
                  <img
                    className="lg:w-[49px] lg:h-[49px] lg:rounded-full"
                    src={`${baseUrl}/${newsDetail.Author.profilePhoto}`}
                    alt=""
                  />
                )}
            </div>
            <div>
              {newsDetail && newsDetail.Author ? (
                <>
                  <p className="lg:text-[16px] lg:leading-[24px] lg:font-semibold lg:mb-0 capitalize">
                    {newsDetail.Author.firstName} {newsDetail.Author.lastName}
                  </p>
                  <div className="lg:text-[8px] lg:font-normal lg:leading-[12px] opacity-50">
                    Author
                  </div>
                </>
              ) : (
                <div className="lg:text-[16px] lg:leading-[24px] lg:font-semibold lg:mb-0 capitalize">
                  Author Not Found
                </div>
              )}
            </div>
            <div className="lg:flex gap-[5px] lg:items-center">
              <div>
                <p className="lg:text-[16px] lg:font-semibold opacity-50 lg:leading-[24px]">
                  •
                </p>
              </div>
              <div>
                <p className="lg:text-[16px] lg:font-semibold opacity-50 lg:leading-[24px]">
                  {formattedNewsDate}
                </p>
              </div>
            </div>
          </div>
          <div>
            {newsDetail && newsDetail.imageUrl && (
              <img
                className="lg:w-[677px] lg:h-[472px] lg:rounded-[20px] object-cover"
                src={`${baseUrl}/${newsDetail.imageUrl}`}
                alt=""
              />
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[42px] lg:mb-[22px]">
            <p className="lg:text-secondary lg:text-[22px] lg:font-normal lg:leading-normal">
              News
            </p>
            <div className="border-white border-[1px] w-[269px]"></div>
          </div>
          <div>
            {recommendNews &&
              recommendNews.length > 0 &&
              recommendNews.map((item, index) => {
                const recommendNewsDate = new Date(item.date);
                const formattedDate = format(
                  recommendNewsDate,
                  "dd MMMM yyyy",
                  {
                    locale: enGB,
                  }
                );

                return (
                  <div
                    className="flex items-center gap-[32px] border-white border-b-[1px] mb-[21px] pb-[25px] w-[367px]"
                    key={index}
                  >
                    <img
                      className="lg:w-[105px] lg:h-[101px] lg:rounded-[10px]"
                      src={`${baseUrl}/${item.imageUrl}`}
                      alt=""
                    />
                    <div className="lg:mb-[5px]">
                      {item.title.split(" ").length > 5 ? (
                        <h1 className="lg:text-[20px] lg:font-normal lg:leading-normal w-[121px">
                          {item.title.split(" ").slice(0, 5).join(" ") +
                            " ...."}
                        </h1>
                      ) : (
                        <h1 className="lg:text-[20px] lg:font-normal lg:leading-normal h-[60px] w-[121px]">
                          {item.title}
                        </h1>
                      )}
                      <div className="flex gap-[10px] items-center">
                        <FaRegClock className="lg:w-[13px] lg:h-[13px] opacity-50" />
                        <p className="lg:text-[14px] lg:font-normal lg:leading-normal opacity-50">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        className="lg:text-[20px] lg:font-normal lg:leading-normal max-w-screen lg:mb-[290px]"
        dangerouslySetInnerHTML={{
          __html: newsDetail
            ? newsDetail.description
            : "Deskripsi tidak tersedia",
        }}
      ></div>
    </section>
  );
}

export default DetailPage;
