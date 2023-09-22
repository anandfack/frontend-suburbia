import React, { useState, createContext, useContext } from "react";

import { useParams } from "react-router-dom";

const DataDetailNewsContext = createContext();

export const useData = () => {
  return useContext(DataDetailNewsContext);
};

export const DetailNewsProvider = ({ children }) => {
  const { id } = useParams();

  const [newsDetail, setNewsDetail] = useState({});
  const [recommendNews, setRecommendNews] = useState([]);

  const baseUrl = process.env.REACT_APP_BASEURL;

  const { format } = require("date-fns");
  const { enGB } = require("date-fns/locale");

  return (
    <DataDetailNewsContext.Provider
      value={{
        newsDetail,
        recommendNews,
        baseUrl,
        format,
        enGB,
        id,
        setNewsDetail,
        setRecommendNews,
      }}
    >
      {children}
    </DataDetailNewsContext.Provider>
  );
};
