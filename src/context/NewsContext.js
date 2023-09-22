import React, { useState, useEffect, createContext, useContext } from "react";

import axios from "../configs/axios";

const DataNewsContext = createContext();

export const useData = () => {
  return useContext(DataNewsContext);
};

export const NewsProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BASEURL;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [headlineNews, setHeadlineNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/news-page");
      const data = response.data[0].payload.data;

      setHeadlineNews(data.headlineNews);
      setAllNews(data.allNews);

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
    <DataNewsContext.Provider
      value={{ headlineNews, allNews, loading, error, baseUrl }}
    >
      {children}
    </DataNewsContext.Provider>
  );
};
