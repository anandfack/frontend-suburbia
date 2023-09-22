import React, { useState, useEffect, createContext, useContext } from "react";

import axios from "../configs/axios";

const DataRoasterContext = createContext();

export const useData = () => {
  return useContext(DataRoasterContext);
};

export const RoasterProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BASEURL;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allRoaster, setAllRoaster] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/roaster-page");
      const data = response.data[0].payload.data;

      setAllRoaster(data.allRoaster);

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
    <DataRoasterContext.Provider
      value={{ baseUrl, loading, error, allRoaster }}
    >
      {children}
    </DataRoasterContext.Provider>
  );
};
