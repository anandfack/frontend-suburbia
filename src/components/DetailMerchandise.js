import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import axios from "../configs/axios";

// import { FaCartPlus } from "react-icons/fa";

import { Popover, Transition } from "@headlessui/react";

import tokopediaLogo from "../assets/img/tokopedia.png";
import shopeeLogo from "../assets/img/shopee.png";

const DetailMerchandise = () => {
  const { id } = useParams();

  const baseUrl = process.env.REACT_APP_BASEURL;

  const [detailMerchandise, setDetailMerchandise] = useState({});
  const [recommendMerchandise, setRecommendMerchandise] = useState([]);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const openImagePreview = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsImagePreviewOpen(true);
  };

  const handleImageMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const zoom = 1.75;

    setCursorPosition({ x, y });
    setZoomLevel(zoom);
  };

  const handleImageMouseLeave = () => {
    setZoomLevel(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/merchandise-page/${id}`);
        const merchandiseDetailData = response.data[0].payload.data;

        console.log(merchandiseDetailData.detailMerchandise);

        setDetailMerchandise(merchandiseDetailData.detailMerchandise);
        setRecommendMerchandise(merchandiseDetailData.recommendMerchandise);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id, setDetailMerchandise, setRecommendMerchandise]);

  return (
    <section className="md:mx-[190px]">
      <h1 className="md:text-[24px] md:leading-[22.77px] md:font-bold md:mb-[25px]">
        Official Merchandise From Suburbia
      </h1>
      <div className="flex flex-row gap-[32px] lg:mb-[100px]">
        <div>
          {isImagePreviewOpen ? (
            <div className="md:w-[329px] md:h-[329px] md:rounded-[10px] overflow-hidden cursor-crosshair">
              <img
                className="object-cover"
                src={previewImage}
                alt=""
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: `${cursorPosition.x * 100}% ${
                    cursorPosition.y * 100
                  }%`,
                }}
              />
            </div>
          ) : (
            <>
              {detailMerchandise &&
                detailMerchandise.imageMerchandises &&
                detailMerchandise.imageMerchandises
                  .filter((image) => image.isDefault === true)
                  .map((defaultImage) => (
                    <div className="md:w-[329px] md:h-[329px] md:rounded-[10px] overflow-hidden cursor-crosshair">
                      <img
                        className="object-cover"
                        key={defaultImage.id}
                        src={`${baseUrl}/${defaultImage.imageUrl}`}
                        alt=""
                        onMouseMove={handleImageMouseMove}
                        onMouseLeave={handleImageMouseLeave}
                        style={{
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: `${cursorPosition.x * 100}% ${
                            cursorPosition.y * 100
                          }%`,
                        }}
                      />
                    </div>
                  ))}
            </>
          )}

          <div className="flex flex-row gap-[21px]">
            {detailMerchandise &&
              detailMerchandise.imageMerchandises &&
              detailMerchandise.imageMerchandises.map((defaultImage) => (
                <div className="md:w-[90px] md:h-[90px] md:mt-[15px] cursor-pointer">
                  <img
                    className="object-cover md:rounded-[5px]"
                    key={defaultImage.id}
                    src={`${baseUrl}/${defaultImage.imageUrl}`}
                    alt=""
                    onClick={() =>
                      openImagePreview(`${baseUrl}/${defaultImage.imageUrl}`)
                    }
                  />
                </div>
              ))}
          </div>
        </div>
        <div>
          <h1 className="md:text-[24px] md:font-bold md:leading-[27.77px] md:w-[395] md:mb-[20px]">
            {detailMerchandise && detailMerchandise.title}
          </h1>
          <h1 className="md:text-[24px] text-secondary md:font-bold md:leading-[27.77px] md:w-[138px] md:mb-[20px]">
            Rp. {detailMerchandise && detailMerchandise.price}
          </h1>
          <p className="md:text-[8px] md:font-medium md:leading-[12px] md:w-[412px] md:mb-[22px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it.
          </p>
          <h1 className="md:text-[15px] md:leading-[17.35px] md:w-[102px] md:mb-[9px]">
            Size Available
          </h1>
          <div className="flex flex-row md:gap-[10px] md:mb-[14px]">
            <p className="md:text-[15px] md:leading-[17.35px] md:border-[2px] md:rounded-[5px] px-[10px] py-[5px]">
              S
            </p>
            <p className="md:text-[15px] md:leading-[17.35px] md:border-[2px] md:rounded-[5px] px-[10px] py-[5px]">
              M
            </p>
            <p className="md:text-[15px] md:leading-[17.35px] md:border-[2px] md:rounded-[5px] px-[10px] py-[5px]">
              L
            </p>
            <p className="md:text-[15px] md:leading-[17.35px] md:border-[2px] md:rounded-[5px] px-[10px] py-[5px]">
              XL
            </p>
          </div>
          <div className="flex flex-row gap-[15px] items-center">
            <Popover className="flex flex-col gap-[15px] items-center">
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of the chevron icon. */
                <div className="md:flex md:gap-[10px]">
                  <Popover.Button className="md:text-[10px] md:leading-[15px] md:font-semibold bg-secondary text-black md:px-[10px] md:py-[6px] flex flex-row items-center gap-[15px] rounded-[7px]">
                    {/* <FaCartPlus /> */}
                    Buy Now
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className="transition-transform flex flex-row gap-[12px] bg-white p-[12px] rounded-[12px]">
                      <Link
                        to={detailMerchandise && detailMerchandise.tokopediaUrl}
                        target="_blank"
                      >
                        <img
                          src={tokopediaLogo}
                          className="w-[75px] h-[53px] opacity-90 hover:opacity-100 transition"
                          alt=""
                        />
                      </Link>
                      <Link
                        to={detailMerchandise && detailMerchandise.shopeeUrl}
                        target="_blank"
                      >
                        <img
                          src={shopeeLogo}
                          className="w-[79px] h-[53px] opacity-90 hover:opacity-100 transition"
                          alt=""
                        />
                      </Link>
                    </Popover.Panel>
                  </Transition>
                  <button className="md:px-[10px] md:py-[6px] md:border-[1px] md:rounded-[5px] md:text-[10px] md:leading-[15px]">Contact Admin</button>
                </div>
              )}
            </Popover>
          </div>
        </div>
        <div></div>
      </div>
      <div className="md:mb-[150px]">
        <h1 className="md:text-[24px] md:font-bold md:leading-[27.77px] md:mb-[24px]">
          Merch Lainnya
        </h1>
        <div className="flex flex-row gap-[32px]">
          {recommendMerchandise &&
            recommendMerchandise.map((item, index) => {
              return (
                <Link to={`/merchandise/${item.slug}`} key={index}>
                  {item.imageMerchandises &&
                    item.imageMerchandises.map((image) => (
                      <img
                        className="md:w-[241px] md:h-[241px] object-cover md:rounded-[10px] md:mb-[10px]"
                        key={image.id}
                        src={`${baseUrl}/${image.imageUrl}`}
                        alt=""
                      />
                    ))}
                  <p className="md:text-[15px] md:font-semibold md:leading-[22.5px] md:mb-0">
                    {item.title}
                  </p>
                  <p className="md:text-[15px] md:leading-[22.5px] md:font-medium text-secondary">
                    Rp. {item.price}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default DetailMerchandise;
