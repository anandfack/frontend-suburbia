import React from "react";

import headerRoaster from "../assets/img/header-roaster.png";
import profileRoaster from "../assets/img/profile-roaster.png";
import releaseArt from "../assets/img/balada-distorsi.png";
import roasterImage from "../assets/img/roaster-image.png";
import modernheadsImage from "../assets/img/modernheads.png";

const HeaderRoaster = () => {
  return (
    <section className="md:mx-[190px] relative">
      <img
        className="absolute md:w-[1050px] md:h-[300px] md:rounded-[10px]"
        src={headerRoaster}
        alt=""
      />
      <div className="md:mb-[25px] md:absolute md:inset-x-[91px] md:inset-y-[248px]">
        <div className="md:flex md:gap-[32px] md:mb-[25px]">
          <img
            className="md:w-[241px] md:h-[241px] md:rounded-[10px]"
            src={profileRoaster}
            alt=""
          />
          <div className="md:mt-[85px]">
            <h1 className="md:text-[24px] md:leading-[36px] md:mb-0 font-bold">
              Lunarways
            </h1>
            <p className="md:text-[13px] md:leading-[19.5px] md:mb-[14px]">
              Stoner - Surabaya
            </p>
            <div className="md:flex md:gap-[10px] md:mb-[14px]">
              <div className="md:px-[10px] md:py-[6px] md:text-[10px] md:leading-[15px] md:border rounded-[5px]">
                Stream Spotify
              </div>
              <div className="md:px-[10px] md:py-[6px] md:text-[10px] md:leading-[15px] md:border rounded-[5px]">
                Follow
              </div>
            </div>
            <h1 className="md:text-[13px] md:leading-[19.5px]">
              3 Song | 1 EP Album
            </h1>
          </div>
        </div>
        <div className="md:w-[881px] md:mb-[50px]">
          <p className="md:text-[13px] md:leading-[19.5px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        {/* Lunarways News */}
        <div className="md:mb-[50px]">
          <h1 className="md:text-[24px] md:mb-[24px] md:font-bold md:leading-[36px]">
            Lunarways News
          </h1>
          <div className="md:flex md:gap-[32px]">
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px]"
              src={releaseArt}
              alt=""
            />
            <div className="md:mt-[18px]">
              <h1 className="md:text-[24px] md:leading-[36px] md:mb-[10px] font-bold">
                Single “ Balada Distorsi “
              </h1>
              <p className="md:text-[13px] md:leading-[19.5px] md:w-[590px] md:mb-[20px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock
                .........
              </p>
              <div className="md:text-[10px] md:leading-[15px] md:py-[6px] md:px-[10px] md:border md:rounded-[5px] md:w-[78px]">
                Read News
              </div>
            </div>
          </div>
        </div>

        {/* Galeri Lunarways */}
        <div className="md:mb-[50px]">
          <h1 className="md:text-[24px] md:mb-[24px] md:font-bold md:leading-[36px] text-center">
            Galeri Of Lunarways
          </h1>
          <div className="md:mx-[46px] md:grid md:grid-cols-3 md:gap-[32px]">
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
            <img
              className="md:w-[241px] md:h-[241px] md:rounded-[10px] object-cover"
              src={roasterImage}
              alt=""
            />
          </div>
        </div>

        {/* Others Roaster */}
        <div>
          <h1 className="md:text-[24px] md:leading-[36px] md:font-semibold md:mb-[24px]">
            See Other Roaster
          </h1>
          <div className="md:flex md:gap-[30px]">
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <img
                className="md:w-[103px] md:h-[103px] md:rounded-full object-cover"
                src={modernheadsImage}
                alt=""
              />
              <p className="md:text-[13px] md:leading-[19.5px]">Modernheads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderRoaster;
