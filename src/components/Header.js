import React, { useState } from "react";

import Logo from "../assets/img/Logo.png";

// import components
// import { NavMobile } from "./NavMobile";

// import icons
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="bg-black mx-[128px] left-0 lg:py-[25px]">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <button>
          <img className="lg:w-[147px] lg:h-[55px]" src={Logo} alt="" />
        </button>
        {/* Menu Icons */}
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="text-white text-[24px] font-bold md:hidden cursor-pointer"
        >
          {mobileNav ? <FaTimes /> : <FaBars />}
        </div>
        {/* Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="md:flex gap-x-[35px]">
            <li>
              <a
                className="capitalize font-semibold text-[20px] text-white opacity-95 hover:opacity-100 transition"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="capitalize font-semibold text-[20px] text-white opacity-50 hover:opacity-100 transition"
                href="#"
              >
                Roaster
              </a>
            </li>
            <li>
              <a
                className="capitalize font-semibold text-[20px] text-white opacity-50 hover:opacity-100 transition"
                href="#"
              >
                Show
              </a>
            </li>
            <li>
              <a
                className="capitalize font-semibold text-[20px] text-white opacity-50 hover:opacity-100 transition"
                href="#"
              >
                Merchandise
              </a>
            </li>
          </ul>
        </nav>
        {/* Nav Mobile */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
        >
          {/* <NavMobile /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
