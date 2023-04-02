import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search } from "../components/Search";
import { Genre } from "../components/Genre";
import { Ratings } from "../components/Ratings";
import Shimmer from '../components/Shimmer';
import ShowCard from "../components/ShowCard";
import { getShows } from '../api/shows';
import { searchShow, searchShows } from '../api/search';
import { GET_URL_SHOWSLIST } from "../utils/config";

const Dashboard = () => {
  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await getShows();
      const sortedShows = response.sort((a, b) =>
        sortOrder === 'asc'
          ? a.rating.average - b.rating.average
          : b.rating.average - a.rating.average
      );
      setShows(sortedShows);
      setIsLoading(false);
    };
    fetchShows();
  }, [sortOrder]);

  /* useEffect(() => {
    fetchShowsList();
  }, []);

  */ 
  const fetchShowsList = async () => {
    try {
      const response = await fetch(GET_URL_SHOWSLIST);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      sortShowsByRating(sortOrder, jsonData); //Sort by default to descendaing order of rating before displaying

    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const sortShowsByRating = (order, shows) => {
    const sortedShows = [...shows].sort((a, b) => {
      if (order === 'asc') {
        return a.rating.average - b.rating.average;
      } else {
        return b.rating.average - a.rating.average;
      }
    });
    setShows(sortedShows)
  };

  const allGeneres = useMemo(() => {
    const genres = new Set();
    if (shows) {
      shows.forEach((show) => show.genres.length && genres.add(...show.genres)); // adding unique genres
    }
    return Array.from(genres);
  }, [shows]);

  const filterGenre = useCallback(
    (showsToFilter) => {
      return showsToFilter.filter((show) => show.genres.includes(selectedGenre));
    },
    [selectedGenre]
  );

  const filteredShows = useMemo(() => {
    if (selectedGenre === "" ) {
      return shows;
    }
  
    if (selectedGenre !== "") {
      return filterGenre(shows);
    }
   
  }, [shows, selectedGenre, filterGenre]);


  const onGenreClick = (event) => {
    const genre = event.target.value;
    setSelectedGenre(selectedGenre === genre ? "" : genre);
  };

  const onSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text.trim());
    const fetchShows = async (text) => {
      const response = await searchShows(searchText);
      console.log(response)
    };
    fetchShows();

  };

 
   // Don't render component (Early return)
if (!filteredShows) {
  return null;
}

  return (
    <div className="container w-full mx-auto my-10">
      <div className="flex flex-col justify-between gap-4 mb-6 lg:flex-row">
        
        <Search onSearchChange={onSearchChange} searchText={searchText}/>
        <Genre allGeneres={allGeneres} onGenreClick={onGenreClick} selectedGenre={selectedGenre} />

        <div className="inline-flex flex-wrap gap-5 md:gap-3">
          <h3 className="mr-5 text-xl foutline-none font-bold text-abnamro-green">Sort by Rating:</h3>
          <select
            onChange={(e) => {
              setSortOrder(e.target.value);
              sortShowsByRating(e.target.value, shows);
            }}
            className="border border-abnamro-yellow w-[180px]"

          >
            <option value="desc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

        
      </div>
      
    { filteredShows?.length === 0 ? (<Shimmer />) : 
    <div className="flex flex-wrap gap-5 justify-center">
      {filteredShows.map((show) => {
        return ( <Link
          className="basis-[210px] p-2.5 mb-2.5 mob:basis-[150px]" to={"/show/" + show.id} key={show.id}>
          <ShowCard {...show} key={show.id} />
        </Link>
        )
      })}
    </div>
    }

    </div>
  );
}

export default Dashboard;
