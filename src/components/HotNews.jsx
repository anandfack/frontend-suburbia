import React from "react";

import profilePicture from "../assets/img/profile-picture.png";
import imageBand from "../assets/img/image-teenagers.png";
import imageStageDive from "../assets/img/image-stage-dive.png";
import imageMmmarkos from "../assets/img/mmmarkos.png";
import imageMetafore from "../assets/img/metafore.png";

const HotNews = () => {
  return (
    <section className="md:mx-[190px] md:mb-[150px]">
      <p className="md:text-[24px] md:leading-[27.77px] md:font-bold md:mb-[24px]">
        Hot News
      </p>
      <div className="md:flex md:gap-[32px]">
        <div>
          <img
            src={imageBand}
            alt=""
            className="md:w-[241px] md:h-[241px] md:rounded-[10px] md:mb-[9px]"
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
              tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan
              mengacaknya untuk menjadi sebuah buku contoh huruf Ia tidak hanya
              bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf
              elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada
              tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang
              menggunakan kalimat- kalimat dari Lorem Ipsum, dan seiring
              munculnya perangkat lunak Desktop Publishing seperti Aldus
              PageMaker juga memiliki versi Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-black" />
          <img
            className="md:w-[514px] md:h-[514px] md:rounded-[10px]"
            src={imageStageDive}
            alt=""
          />
          <div className="absolute inset-x-[32px] bottom-0 inset-y-[346px]">
            <div>
              <div className="md:flex md:gap-[8px] md:items-center md:mb-[7px]">
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
              <div className="3md:mb-[10px]">
                <h1 className="md:text-[24px] md:font-bold md:leading-[30px]">
                  Gig Report From #FiddleheadJkt
                </h1>
              </div>
              <div className="md:w-[446px] md:h-[60px]">
                <p className="md:text-[8px] md:leading-[12px]">
                  Sebenarnya atmosfer gig tanggal 20 Agustus kemarin cukup
                  positif. Dari traffic pas on the way ke gig juga ga ada yang
                  aneh-aneh sih. Bener-bener minggu sore yang cukup chill
                  sebenernya kalau mimin deskripsikan Jadi sore itu merupakan
                  perhelatan dari gig Fiddlehead dalam rangka tur South East
                  Asia mereka yang dimana sebelumnya band ini telah menyambangi
                  beberapa kota di Jepang dan selanjutnya akan bergulir kepada
                  tur di daratan Australia..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-[37px]">
          <div>
            <img
              className="md:w-[241px] md:h-[120px] object-cover md:mb-[9px]"
              src={imageMetafore}
              alt=""
            />
            <div className="md:flex md:gap-[8px] md:items-center md:mb-[14px]">
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
            <div className="md:w-[243px] md:h-[46px] md:mb-[5px]">
              <h1 className="font-semibold md:text-[15px] md:leading-[22.5px]">
                Metafore Mengeksplorasi Post- Rock melalui Single "Cahaya ....
              </h1>
            </div>
            <div className="md:w-[217px] md:h-[24px]">
              <p className="md:text-[8px] md:leading-[12px]">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau type.......
              </p>
            </div>
          </div>
          <div>
            <img
              className="md:w-[241px] md:h-[120px] object-cover md:mb-[9px]"
              src={imageMmmarkos}
              alt=""
            />
            <div className="md:flex md:gap-[8px] md:items-center md:mb-[14px]">
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
            <div className="md:w-[243px] md:h-[46px] md:mb-[5px]">
              <h1 className="font-semibold md:text-[15px] md:leading-[22.5px]">
                Metafore Mengeksplorasi Post- Rock melalui Single "Cahaya ....
              </h1>
            </div>
            <div className="md:w-[217px] md:h-[24px]">
              <p className="md:text-[8px] md:leading-[12px]">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau type.......
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotNews;
