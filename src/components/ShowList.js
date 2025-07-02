import React from "react";

import { useData } from "../context/DropdownContext";
import { Link } from "react-router-dom";
import Shows from "./Shows";

const ShowList = () => {
  const { shows } = useData();
  return (
    <section className="mx-[128px]">
      {shows.map((item) => {
        return (
          <div key={item.id}>
            <Shows shows={item} />
          </div>
        );
      })}
    </section>
  );
};

export default ShowList;
