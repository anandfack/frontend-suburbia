import React from "react";

import Header from "../components/Header";
import BreadCrumb from "../components/Breadcrumb";
import DetailMerchandise from "../components/DetailMerchandise";

const DetailsMerchandisePage = () => {
  return (
    <div className="max-w-[1440px] w-full">
      <Header />
      <BreadCrumb />
      <DetailMerchandise />
    </div>
  );
};

export default DetailsMerchandisePage;
