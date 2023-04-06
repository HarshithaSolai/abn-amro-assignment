import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import SearchShows from "../components/SearchShows";
import GenreFilter from "../components/GenreFilter";
import RatingSorter from "../components/RatingSorter";
import ShowCard from "../components/ShowCard";
import { SHOWS_ENDPOINT} from "../utils/config";
import useFetch from "../utils/customhooks/useFetch";
import { TransitionState } from "../components/TransitionState";

const Dashboard = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  let availableGenres = new Set();
  if (shows && shows.length > 0) {
    availableGenres = shows.reduce((acc, show) => {
      show.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set());
  }

  const sortShows = (sortOrder, data) => {
    return [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.rating.average - b.rating.average
        : b.rating.average - a.rating.average
    );
  };

  const handleGenreFilter = (event) => {
    const selectedGenre = event.target.value;
    if (selectedGenre === "all") {
      const sorted = sortShows(sortOrder, shows);
      setFilteredShows(sorted);
    } else {
      const filtered = shows.filter((show) =>
        show.genres.includes(selectedGenre)
      );
      const sorted = sortShows(sortOrder, filtered);
      setFilteredShows(sorted);
    }
  };

  const handleSortOrder = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    const sorted = sortShows(newSortOrder, filteredShows);
    setFilteredShows(sorted);
  };

  // Call the useFetch hook to fetch the shows data
  const { data: showsData, loading: showsLoading, error: showsError } = useFetch(SHOWS_ENDPOINT);

  useEffect(() => {
    if (showsData) {
      setShows(showsData);
      setFilteredShows(showsData);
    }
  }, [showsData]);

  useEffect(() => {
    if (filteredShows && filteredShows.length > 0) {
      const sorted = sortShows(sortOrder, filteredShows);
      setFilteredShows(sorted);
    }
  }, [filteredShows, sortOrder]);

  if (showsError) {
    return <TransitionState type="error-state" />;
  }

  return (
    <div className="container w-full mx-auto my-10">
      <div className="flex justify-between gap-4 mb-6 flex-col xl:flex-row">
        <SearchShows />
        <GenreFilter
          onGenreFilter={handleGenreFilter}
          availableGenres={availableGenres}
        />
        <RatingSorter sortOrder={sortOrder} onSortOrder={handleSortOrder} />
      </div>

      {showsLoading ? ( // Check if the data is still loading
        <Shimmer /> // Show shimmer until the data is loaded
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredShows.map((show) => {
            return (
              <Link
                className="basis-[210px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/show/" + show.id}
                key={show.id}
              >
                <ShowCard {...show} key={show.id} testId={`show-card-${show.id}`}/> 
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
