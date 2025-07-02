import React from "react";

import imageCover from "../assets/img/image-editor-picks.png";
import profilePicture from "../assets/img/profile-picture.png";
import imageBand from "../assets/img/image-teenagers.png";

const EditorPicks = () => {
  return (
    <section className="md:mx-[190px] md:mb-[100px]">
      <p className="md:text-[24px] md:leading-[27.77px] md:font-bold md:mb-[24px]">
        Editor Picks
      </p>
      <div className="relative md:rounded-[10px] md:mb-[20px]">
        <img src={imageCover} alt="" className="md:w-[1060px] md:h-[300px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-5% to-black" />
        <div className="absolute inset-x-[32px] bottom-0 inset-y-[154px]">
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
            <div className="md:w-[606px] md:h-[60px] md:mb-[10px]">
              <h1 className="md:text-[24px] md:font-bold md:leading-[30px]">
                Nostalgia, Ini 13 Album Punk Rock 90-an Besutan Major Label yang
                Beredar di Tanah Air
              </h1>
            </div>
            <div className="md:w-[704px] md:h-[24px]">
              <p className="md:text-[8px] md:leading-[12px]">
                Setelah Green Day sukses di ranah mainstream pada pertengahan
                dekade 1990, sebagian label mayor mulai melirik punk rock
                sebagai hal yang profitable. Meski demikian, tak serta-merta
                banyak band punk yang ingin bergabung. Padahal bila merunut ke
                belakang, sesungguhnya punk rock memiliki kedekatan dengan label
                mayor. Read News
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-[28px]">
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

export default EditorPicks;
