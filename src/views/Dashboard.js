import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import SearchShows from "../components/SearchShows";
import GenreFilter from "../components/GenreFilter";
import RatingSorter from "../components/RatingSorter";
import ShowCard from "../components/ShowCard";
import { SHOWS_ENDPOINT } from "../utils/config";
import useFetch from "../utils/customhooks/useFetch";
import { TransitionState } from "../components/TransitionState";

const Dashboard = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  // Call the useFetch hook to fetch the shows data
  const { data: showsData, loading: showsLoading, error: showsError } = useFetch(
  SHOWS_ENDPOINT
  );

  const availableGenres = useMemo(() => {
    let genres = new Set();
    if (shows && shows.length > 0) {
      genres = shows.reduce((acc, show) => {
        show.genres.forEach((genre) => acc.add(genre));
        return acc;
      }, new Set());
    }
    return genres;
  }, [shows]);

  const sortShows = useCallback(
    (order, data) => {
      return [...data].sort((a, b) =>
        order === "asc"
          ? a.rating.average - b.rating.average
          : b.rating.average - a.rating.average
      );
    },
    []
  );

  const sortedShows = useMemo(() => {
    if (showsData && showsData.length > 0) {
      return sortShows(sortOrder, showsData);
    }
    return [];
  }, [showsData, sortShows]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleGenreFilter = useCallback(
    (event) => {
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
    },
    [shows, sortOrder, sortShows]
  );

  const handleSortOrder = useCallback(
    (event) => {
      const newSortOrder = event.target.value;
      setSortOrder(newSortOrder);
      const sorted = sortShows(newSortOrder, filteredShows);
      setFilteredShows(sorted);
    },
    [filteredShows, sortShows]
  );

  useMemo(() => {
    if (showsData) {
      setShows(showsData);
      setFilteredShows(sortedShows);
    }
  }, [showsData, sortedShows]);

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
        <Shimmer /> // Show shimmer until the data
      ) : (
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredShows.map((show) => {
            return (
              <Link
                className="basis-[210px] p-2.5 mb-2.5 mob:basis-[150px] xsm:basis-[150px] sm:basis-[150px]"
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
