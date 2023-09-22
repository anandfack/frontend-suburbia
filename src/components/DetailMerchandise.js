import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import axios from "../configs/axios";

import { FaCartPlus } from "react-icons/fa";

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
    <section className="mx-[128px]">
      <h1 className="lg:text-[40px] lg:leading-[60px] lg:font-bold lg:mb-[50px]">
        Official Merchandise From Suburbia
      </h1>
      <div className="flex flex-row gap-[32px] lg:mb-[100px]">
        <div>
          {isImagePreviewOpen ? (
            <div className="lg:w-[576px] lg:h-[576px] lg:rounded-[20px] overflow-hidden cursor-crosshair">
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
                    <div className="lg:w-[576px] lg:h-[576px] lg:rounded-[20px] overflow-hidden cursor-crosshair">
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
                <div className="lg:w-[128px] lg:h-[128px] lg:rounded-[8px] lg:mt-[30px] cursor-pointer">
                  <img
                    className="object-cover"
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
          <h1 className="lg:text-[40px] lg:font-bold lg:leading-[60px] lg:w-[529px] lg:mb-[19px]">
            {detailMerchandise && detailMerchandise.title}
          </h1>
          <h1 className="lg:text-[40px] text-secondary lg:font-bold lg:leading-[60px] lg:w-[529px] lg:mb-[19px]">
            Rp. {detailMerchandise && detailMerchandise.price}
          </h1>
          <p className="lg:text-[20px] lg:font-medium lg:leading-[30px] lg:w-[587px] lg:mb-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it.
          </p>
          <h1 className="lg:text-[32px] lg:font-bold lg:leading-[48px] lg:w-[121px] lg:mb-[20px]">
            Ukuran
          </h1>
          <div className="flex flex-row gap-[10px] mb-[37px]">
            <p className="lg:text-[40px] lg:leading-[60px] lg:border-[2px] lg:rounded-[10px] px-[22px] py-[5px]">
              S
            </p>
            <p className="lg:text-[40px] lg:leading-[60px] lg:border-[2px] lg:rounded-[10px] px-[22px] py-[5px]">
              M
            </p>
            <p className="lg:text-[40px] lg:leading-[60px] lg:border-[2px] lg:rounded-[10px] px-[22px] py-[5px]">
              L
            </p>
            <p className="lg:text-[40px] lg:leading-[60px] lg:border-[2px] lg:rounded-[10px] px-[22px] py-[5px]">
              XL
            </p>
          </div>
          <div className="flex flex-row gap-[15px] items-center">
            <Popover className="flex flex-col gap-[15px] items-center">
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of the chevron icon. */
                <>
                  <Popover.Button className="lg:text-[30px] lg:leading-[45px] lg:font-semibold bg-secondary text-black lg:px-[15px] lg:py-[7px] flex flex-row items-center gap-[15px] rounded-[7px]">
                    <FaCartPlus />
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
                </>
              )}
            </Popover>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="lg:text-[40px] lg:font-bold lg:leading-[60px] lg:mb-[50px] text-center">
          Merch Lainnya
        </h1>
        <div className="flex flex-row gap-[32px]">
          {recommendMerchandise &&
            recommendMerchandise.map((item, index) => {
              return (
                <Link to={`/merchandise/${item.id}`} key={index}>
                  {item.imageMerchandises &&
                    item.imageMerchandises.map((image) => (
                      <img
                        className="lg:w-[272px] lg:h-[272px] object-cover lg:rounded-[10px] lg:mb-[16px]"
                        key={image.id}
                        src={`${baseUrl}/${image.imageUrl}`}
                        alt=""
                      />
                    ))}
                  <p className="lg:text-[26px] lg:font-medium lg:leading-[39px] lg:mb-0">
                    {item.title}
                  </p>
                  <p className="lg:text-[26px] lg:leading-[39px] lg:font-semibold">
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
