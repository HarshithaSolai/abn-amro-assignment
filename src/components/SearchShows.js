import React, { useEffect, useState } from "react";
import { SEARCH_BY_SHOWNAME, DEBOUNCE_DELAY } from "../utils/config";
import { Link } from "react-router-dom";

const SearchShows = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const getSearchResults = async () => {
    if (searchQuery !== "") {
      const data = await fetch(SEARCH_BY_SHOWNAME + searchQuery);
      const json = await data.json();
      setSuggestions(json);
    }
  };


  useEffect(() => {
    //we have to make this call after 200ms
    const timer = setTimeout(() => {
      getSearchResults();
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div data-testid="search-box" className="flex gap-1">
      <h3 className="mr-5 text-xl font-bold text-abnamro-green ">Search:</h3>
      <form className="relative w-[400px]">
        <input
          data-testid="search-input"
          className="px-2 outline-none border border-abnamro-yellow w-full h-[30px] relative z-10"
          type="text"
          placeholder="Search for a TV show"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => {
            const timer = setTimeout(() => {
              setShowSuggestion(false);
            }, 300);
          }}
        />

        {searchQuery.length !== 0 && showSuggestion  && (
          <div data-testid="suggestion-box" className=" bg-white border border-abnamro-yellow w-full  absolute top-[30px] z-20">
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <Link
                    key={suggestion.show.id}
                    to={{ pathname: `/show/${suggestion.show.id}` }}
                  >
                    <li
                      data-testid={`suggestion-item-${suggestion.show.id}`}
                      className="p-2 cursor-pointer hover:bg-gray-200 "
                      key={suggestion.show.id}
                      onClick={() => {
                        setSearchQuery(suggestion.show.name);
                      }}
                    >
                      <span className="suggestion">{suggestion.show.name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchShows;
