import React, { useState, useEffect, useContext, createContext } from "react";

import axios from "../configs/axios";

const DataLandingContext = createContext();

export const useData = () => {
  return useContext(DataLandingContext);
};

export const LandingProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BASEURL;

  const { format } = require("date-fns");
  const { endGB } = require("date-fns/locale");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [exploreNews, setExploreNews] = useState([]);
  const [roaster, setRoaster] = useState([]);
  const [recentShow, setRecentShow] = useState([]);
  const [merchandise, setMerchandise] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/landing-page");
      const data = response.data[0].payload.data;

      setExploreNews(data.exploreNews);
      setRoaster(data.roaster);
      setRecentShow(data.recentShow);
      setMerchandise(data.merchandise);

      // console.log(data.merchandise);

      setError(null);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataLandingContext.Provider
      value={{
        roaster,
        loading,
        error,
        fetchData,
        baseUrl,
        format,
        endGB,
        exploreNews,
        recentShow,
        merchandise,
      }}
    >
      {children}
    </DataLandingContext.Provider>
  );
};
