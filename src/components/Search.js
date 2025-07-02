import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import YearsDropdown from "./YearsDropdown";

import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-[30px] lg:py-[25px] lg:mx-[86px] lg:rounded-[15px] lg:w-[1046px] lg:h-[91px] lg:bg-black lg:bg-opacity-20 lg:shadow-lg lg:backdrop-blur-2xl lg:absolute lg:inset-y-[832px] lg:mb-[286px]">
      <div className="lg:flex lg:flex-row lg:items-center lg:gap-[31px]">
        <CategoryDropdown />
        <YearsDropdown />
      </div>
      <button className="flex lg:flex-row lg:gap-[7px] lg:items-center bg-secondary text-black lg:py-[7px] lg:px-[40px] lg:rounded-[7px] lg:text-[17px] lg:font-normal">
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default Search;
