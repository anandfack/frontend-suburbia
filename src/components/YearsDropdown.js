import React, { useState } from "react";

import { useData } from "../context/DropdownContext";

import { Menu } from "@headlessui/react";

import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const YearsDropdown = () => {
  const { year, setYear, years, setYears } = useData();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      as="div"
      className="border border-white border-opacity-20 rounded-[10px]"
    >
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left justify-between flex flex-row gap-[20px] px-[15px] py-[8px]"
      >
        <p className="text-[16px] font-medium leading-tight flex flex-row">
          Year
          <p className="text-[16px] font-medium leading-tigh text-white text-opacity-50">
            &nbsp;{year}
          </p>
        </p>
        {isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </Menu.Button>
      <Menu.Items className="absolute border mt-[20px] border-white border-opacity-20 rounded-b-[5px] w-[250px]">
        {years.map((year) => {
          return (
            <Menu.Item
              onClick={() => setYear(year)}
              className="cursor-pointer list-none hover:bg-secondary hover:text-black transition text-[16px] font-medium px-[15px] py-[8px]"
              as="li"
              key={year.id}
            >
              {year}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default YearsDropdown;
