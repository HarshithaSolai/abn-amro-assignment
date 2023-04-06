import React, {useState} from "react";
import { SHOWS_ENDPOINT, SEASONS_ENPOINT } from "../utils/config";
import Season from "./Season";
import useFetch from "../utils/customhooks/useFetch";
import { TransitionState } from "./TransitionState";

const Seasons = ({ showId }) => {
  const { data: seasons, loading, error } = useFetch(`${SHOWS_ENDPOINT}/${showId}/${SEASONS_ENPOINT}`);
  const [visibleSeason, setVisibleSeason] = useState("");

  if (error) {
    return <TransitionState type="error-state"/>
  }

  return (<>
    { loading ? ( 
      <TransitionState type="loading-state"/>
      )  : (
    <div>
      <h2 data-testid="seasons-heading" className="p-5 mt-2.5 text-3xl font-semibold text-abnamro-green">Information about Seasons and Episodes</h2>
      {seasons.map((season) => (
        <Season
          key={season.id}
          season={season}
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
    )}
    </>
  );
};

export default Seasons;
