import React, { createContext, useState } from "react";
import { GET_URL_EPISODES } from "../config";

export const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState({});

  // Function to fetch episodes data for a season and store it in context
  const fetchEpisodesData = async (seasonId) => {
    try {
      const response = await fetch(`${GET_URL_EPISODES}/${seasonId}/episodes`);
      const data = await response.json();
    setEpisodesData((prevState) => ({
      ...prevState,
        [seasonId]: data,
    }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Provide EpisodesContext with episodesData state and fetchEpisodesData function
    <EpisodesContext.Provider value={{ episodesData, fetchEpisodesData }}>
      {children}
    </EpisodesContext.Provider>
  );
};
