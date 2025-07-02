import React from "react";

import { useData } from "../context/RoasterContext";
// import { Link } from "react-router-dom";
import profilePicture from "../assets/img/profile-picture.png";
import imageBand from "../assets/img/image-teenagers.png";

const AllRoaster = () => {
  const { baseUrl, allRoaster } = useData();

  return (
    <section className="md:mx-[190px] md:mb-[50px]">
      <h1 className="md:mb-[24px] md:text-[24px] md:leading-[27.77px] md:font-bold">
        Roaster of Suburbia
      </h1>
      <div className="md:grid md:grid-cols-4 md:gap-[32px] md:mb-[100px]">
        {allRoaster.map((item, index) => {
          return (
            <div key={index}>
              <div className="relative">
                <img
                  className="md:w-[241px] md:h-[241px] md:rounded-[10px]"
                  src={`${baseUrl}/${item.imageUrl}`}
                  alt={item.imageUrl}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-2% to-black opacity-75" />
                <div className="absolute inset-x-[15px] bottom-0 inset-y-[197px]">
                  <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
                    {item.nameBand}
                  </h1>
                  <p className="md:text-[8px] md:leading-[12px]">
                    {item.genre} - {item.city}
                  </p>
                </div>
              </div>
            </div>
            // <div
            //   key={index}
            //   className="lg:flex lg:gap-[33px] lg:mb-[111px] lg:items-center lg:w-[983px] "
            // >
            //   <img
            //     className="lg:rounded-full lg:w-[272px] lg:h-[272px] object-center"
            //     src={`${baseUrl}/${item.imageUrl}`}
            //     alt={item.imageUrl}
            //   />
            //   <div>
            //     <h1 className="lg:text-[48px] lg:font-bold lg:leading-[72px] lg:mb-0">
            //       {item.nameBand}
            //     </h1>
            //     <p className="lg:text-4 text-white opacity-50 lg:font-medium lg:capitalize lg:mb-4 lg:leading-[24px]">
            //       {item.genre}, {item.city}
            //     </p>
            //     <div
            //       className="lg:text-4 text-white lg:font-medium lg:mb-4 lg:leading-[24px]"
            //       dangerouslySetInnerHTML={{
            //         __html: item
            //           ? item.description
            //           : "Deskripsi tidak tersedia",
            //       }}
            //     ></div>
            //     <div className="flex gap-[10px]">
            //       <Link
            //         to={`${item.spotify}`}
            //         className="lg:leading-[25.5px] lg:px-[15px] lg:py-[7px] lg:rounded-[7px] lg:text-[17px] lg:font-medium text-black  lg:bg-secondary"
            //         target="_blank"
            //       >
            //         Stream
            //       </Link>
            //       <Link
            //         to={`${item.instagram}`}
            //         className="lg:leading-[25.5px] lg:px-[15px] lg:py-[7px] lg:rounded-[7px] lg:text-[17px] lg:font-medium text-white border-[1px]"
            //         target="_blank"
            //       >
            //         Follow
            //       </Link>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
      <h1 className="md:mb-[24px] md:text-[24px] md:leading-[27.77px] md:font-bold">
        News from Roaster
      </h1>
      <div className="md:grid md:grid-cols-4 md:gap-[32px]">
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[250px] md:h-[250px] md:rounded-[10px] md:mb-[9px]"
          />
          <div className="md:flex md:gap-[8px] md:items-center md:mb-[10px]">
            <img
              src={profilePicture}
              alt=""
              className="md:w-[20px] md:h-[20px] md:rounded-full"
            />
            <p className="md:text-[8px] md:font-medium">Fat Dewa Akmal</p>
            <p className="md:text-[8px] md:font-medium opacity-50">
              16 Agustus , 2023
            </p>
          </div>
          <div className="md:w-[221px] md:h-[46px] md:mb-[5px]">
            <h1 className="md:text-[15px] md:font-bold md:leading-[22.5px]">
              Teenagers EP Baru Bernama “ Teenage Rising “
            </h1>
          </div>
          <div className="md:w-[243px] md:h-[48px]">
            <p className="md:text-[8px] md:leading-[12px]">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal men...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRoaster;
