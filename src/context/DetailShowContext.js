import React, { useState, createContext, useContext } from "react";

import { useParams } from "react-router-dom";

const DataDetailShowContext = createContext();

export const useData = () => {
  return useContext(DataDetailShowContext);
};

export const DetailShowContext = ({ children }) => {
  const { id } = useParams();

  const [showDetail, setShowDetail] = useState({});

  const baseUrl = process.env.REACT_APP_BASEURL;

  const { format } = require("date-fns");
  const { enGB } = require("date-fns/locale");

  return (
    <DataDetailShowContext.Provider
      value={{
        showDetail,
        baseUrl,
        format,
        enGB,
        id,
        setShowDetail,
      }}
    >
      {children}
    </DataDetailShowContext.Provider>
  );
};
