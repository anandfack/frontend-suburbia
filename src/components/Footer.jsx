import React from "react";

import Logo from "../assets/img/Logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mx-[174px]">
      <div className="flex">
        <img
          className="lg:w-[274px] lg:h-[102px] lg:mt-[52px] lg:mr-[95px]"
          src={Logo}
          alt=""
        />
        <div className="flex gap-[71px] items-start">
          <ul className="mt-[17px] p-[10px]">
            <li className="text-[20px] text-secondary leading-normal font-semibold mb-[10px]">
              Menus
            </li>
            <li>
              <Link
                to={"/"}
                className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-[10px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/news"}
                className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-[10px]"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to={"/roaster"}
                className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-[10px]"
              >
                Roaster
              </Link>
            </li>
            <li>
              <Link
                to={"/show"}
                className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-[10px]"
              >
                Show
              </Link>
            </li>
            <li>
              <Link
                to={"/merchandise"}
                className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-[10px]"
              >
                Merchandise
              </Link>
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="flex gap-[157px] h-[136px] mb-[30px] border-b">
              <div className="mt-[17px] pl-0 pr-[10px] pt-[10px] pb-[10px]">
                <p className="text-[20px] text-secondary leading-normal font-semibold mb-[10px]">
                  Contacts
                </p>
                <p className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-0">
                  Email:
                </p>
                <p className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)]">
                  suburbia.gigs@gmail.com
                </p>
              </div>
              <div className="mt-[17px] px-0 pt-[10px] pb-[10px]">
                <p className="text-[20px] text-secondary leading-normal font-semibold mb-[10px]">
                  Follow Us :
                </p>
                <p className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)] mb-0">
                  Instagram :
                </p>
                <p className="text-[14px] leading-normal font-normal text-[rgba(255,255,255,0.5)]">
                  suburbia.east
                </p>
              </div>
            </div>
            <p className="text-[22px] leading-normal font-medium text-[rgba(255,255,255,0.5)] text-center">
              Copyright &copy; {new Date().getFullYear()} Suburbia east
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
