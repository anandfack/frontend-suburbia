import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import AllShow from "../components/AllShow";
import ShowList from "../components/ShowList";

const ShowPage = () => {
  return (
    <div>
      <Breadcrumb />
      <AllShow />
      <ShowList />
    </div>
  );
};

export default ShowPage;
