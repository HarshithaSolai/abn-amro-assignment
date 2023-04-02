import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import SearchShows from "../components/SearchShows";
import GenreFilter from "../components/GenreFilter";
import RatingSorter from "../components/RatingSorter";
import ShowCard from "../components/ShowCard";
import { GET_URL_SHOWSLIST } from "../utils/config";

const Dashboard = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [genreFilter, setGenreFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const sortShows = (sortOrder, data) => {
    return [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.rating.average - b.rating.average
        : b.rating.average - a.rating.average
    );
  };

  const fetchShows = async () => {
    try {
      const response = await fetch(GET_URL_SHOWSLIST);
      const data = await response.json();
      setShows(data);
      const sorted = sortShows(sortOrder, data);
      setFilteredShows(sorted); // Display the shows in descending order of ratings when the page loads
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  let availableGenres = new Set();
  if (shows && shows.length > 0) {
    availableGenres = shows.reduce((acc, show) => {
      show.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set());
  }

  const handleGenreFilter = (event) => {
    const selectedGenre = event.target.value;
    setGenreFilter(selectedGenre);
    if (selectedGenre === "all") {
      setFilteredShows(shows);
    } else {
      const filtered = shows.filter((show) =>
        show.genres.includes(selectedGenre)
      );
      setFilteredShows(filtered);
    }
  };

  const handleSortOrder = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    const sorted = sortShows(newSortOrder, filteredShows);
    setFilteredShows(sorted);
  };

  if (!shows) {
    return null; //Early return
  }

  return (
    <div className="container w-full mx-auto my-10">
      <div className="flex justify-between gap-4 mb-6 flex-col xl:flex-row">
        <SearchShows />
        <GenreFilter onGenreFilter={handleGenreFilter} availableGenres={availableGenres}/>
        <RatingSorter sortOrder={sortOrder} onSortOrder={handleSortOrder} />
      </div>

      {filteredShows?.length === 0 ? (
        <Shimmer /> //Show shimmer untill the data is loaded 
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredShows.map((show) => {
            return (
              <Link
                className="basis-[210px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/show/" + show.id}
                key={show.id}
              >
                <ShowCard {...show} key={show.id} /> 
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
