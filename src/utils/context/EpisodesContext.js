import React, { createContext, useState } from "react";
import { API_BASE_URL, SEASONS_ENPOINT, EPISODES_ENDPOINT } from "../config";

export const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState({});

  // Function to fetch episodes data for a season and store it in context
  const fetchEpisodesData = async (seasonId) => {
    try {
      const response = await fetch(`${API_BASE_URL}${SEASONS_ENPOINT}/${seasonId}/${EPISODES_ENDPOINT}`);
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
