import React from "react";
import { Link, useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";
import Seasons from "../components/Seasons";
import { SHOWS_ENDPOINT } from "../utils/config";
import { EpisodesProvider } from "../utils/context/EpisodesContext";
import { TransitionState } from "../components/TransitionState";
import useFetch from "../utils/customhooks/useFetch";

const ShowInfo = () => {
  const params = useParams();
  const showId = params?.id;
  const { data: show, loading, error } = useFetch(`${SHOWS_ENDPOINT}/${showId}`);

  if (loading) {
    return <TransitionState type="loading-state" />;
  }

  if (error || !show) {
    return <TransitionState type="error-state" />;
  }

  return (
    <div className="container flex justify-around sm:flex-col xsm:flex-col mob:flex-col">
      <div data-testid="show-details" className="card-container w-[30%] h-2/4 sm:w-auto xsm:w-auto mob:w-auto">
        <Link data-testid="home" to="/" className="p-2 rounded-md bg-abnamro-yellow">
          Back to Home
        </Link>
        <ShowDetails {...show} />
      </div>
      <div data-testid="seasons-details" className="card-container w-[70%] sm:w-auto xsm:w-auto mob:w-auto">
        <EpisodesProvider>
          <Seasons showId={showId} />
        </EpisodesProvider>
      </div>
    </div>
  );
};

export default ShowInfo;
