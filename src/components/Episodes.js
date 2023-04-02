import React, { useEffect, useState } from "react";
import { GET_URL_EPISODES } from "../utils/config";
import Episode from "./Episode";

const Episodes = ({ showId }) => {
  const [episodes, setepisodes] = useState([]);
  const [visibleEpisode, setVisibleEpisode] = useState(""); //Initially all episodes accordion are closed

  useEffect(() => {
    getEpisodeInfo();
  });

  const getEpisodeInfo = async () => {
    try {
      const response = await fetch(`${GET_URL_EPISODES}/${showId}/episodes`);
      const res_data = await response.json();
      setepisodes(res_data);
    } catch (error) {
      console.log(error);
    }
  };

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
