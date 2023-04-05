import React from "react";

const GenreFilter = ({ onGenreFilter, availableGenres }) => {
  return (
    <div data-testid="genre-filter"  className="inline-flex flex-wrap">
      <h3
        htmlFor="genre-filter"
        className="mr-5 text-xl  font-bold text-abnamro-green"
      >
        Filter By Genres:
      </h3>
      <select
        data-testid="genre-select"
        id="genre-filter"
        onChange={onGenreFilter}
        className="border focus:outline-none border-abnamro-yellow w-[180px] h-[30px]"
      >
        <option value="all">All</option>
        {[...availableGenres].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
