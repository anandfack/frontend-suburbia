import axios from "../configs/axios";
import React, { useState, useEffect, useContext, createContext } from "react";

// import axios from "../configs/axios";

const DataDropdownContext = createContext();

export const useData = () => {
  return useContext(DataDropdownContext);
};

export const DropdownProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BASEURL;

  const { format } = require("date-fns");
  const { endGB } = require("date-fns/locale");

  const [shows, setShows] = useState([]);

  const [category, setCategory] = useState("(any)");
  const [categories, setCategoies] = useState([]);

  const [year, setYear] = useState("(any)");
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/recent-show-page");
        const data = response.data[0].payload.data;

        const allCategories = data.recentShow.map((item) => {
          return item.Category.name;
        });

        const uniqueCategories = ["(any)", ...new Set(allCategories)];

        setCategoies(uniqueCategories);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/recent-show-page");
        const data = response.data[0].payload.data;

        const allYears = data.recentShow.map((item) => {
          const date = new Date(item.date);
          return date.getFullYear();
        });

        const uniqueYears = ["(any)", ...new Set(allYears)];

        setYears(uniqueYears);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/recent-show-page");
        const data = response.data[0].payload.data;

        setShows(data.recentShow);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <DataDropdownContext.Provider
      value={{
        baseUrl,
        category,
        setCategory,
        year,
        setYear,
        years,
        setYears,
        categories,
        setCategoies,
        shows,
        setShows,
        format,
        endGB,
      }}
    >
      {children}
    </DataDropdownContext.Provider>
  );
};
