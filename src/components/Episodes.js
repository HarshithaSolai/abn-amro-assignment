import React, { useEffect, useState, useContext } from "react";
import Episode from "./Episode";
import { EpisodesContext } from "../utils/context/EpisodesContext";

const Episodes = ({ seasonId }) => {
  const { episodesData, fetchEpisodesData } = useContext(EpisodesContext);

  const [visibleEpisode, setVisibleEpisode] = useState(""); //Initially all episodes accordion are closed

  useEffect(() => {
    // Fetch episodes data only if it hasn't been stored in context yet
    if (!episodesData || !episodesData[seasonId]) {
      fetchEpisodesData(seasonId);
    }
  }, [seasonId]); // eslint-disable-line react-hooks/exhaustive-deps

  const episodes = episodesData && episodesData[seasonId] ? episodesData[seasonId] : [];

  return (
    <div>
      {episodes.map((episode) => (
        <Episode
          key={episode.id}
          episode={episode}
          isVisible={visibleEpisode === episode.id}
          setIsVisible={(display) => {
            if (display) {
              setVisibleEpisode(episode.id);
            } else {
              setVisibleEpisode(" ");
            }
          }}
        />
      ))}
    </div>
  );
};

export default Episodes;
