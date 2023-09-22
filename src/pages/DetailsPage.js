import React from "react";

import Header from "../components/Header";
import BreadCrumb from "../components/Breadcrumb";
import DetailNews from "../components/DetailNews";

const DetailsPage = () => {
  return (
    <div className="max-w-[1440px] w-full">
      <Header />
      <BreadCrumb />
      <DetailNews />
    </div>
  );
};

export default DetailsPage;
