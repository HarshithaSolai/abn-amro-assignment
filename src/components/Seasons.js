import React, { useEffect, useState } from "react";
import { GET_URL_SHOWSLIST } from "../utils/config";
import Season from "./Season";

const Seasons = ({ showId }) => {
  const [seasons, setSeasons] = useState([]);
  const [visibleSeason, setVisibleSeason] = useState(""); 
  // Lifting Up the state to parent when data about siblings are needed
  // Initially all seasons accordion are closed

  useEffect(() => {
    getSeasonInfo();
  }, []);

  const getSeasonInfo = async () => {
    try {
      const response = await fetch(`${GET_URL_SHOWSLIST}/${showId}/seasons`);
      const res_data = await response.json();
      setSeasons(res_data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="p-5 mt-2.5 text-3xl font-semibold text-abnamro-green">Information about Seasons and Episodes</h2>
      {seasons.map((season) => (
        <Season
          key={season.id}
          season={season}
          showId={showId}
          isVisible={visibleSeason === season.id}
          setIsVisible={(display) => {
            if (display) {
              setVisibleSeason(season.id);
            } else {
              setVisibleSeason(" ");
            }
          }}
        />
      ))}
    </div>
  );
};

export default Seasons;
