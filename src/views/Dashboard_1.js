import { GET_URL_SHOWSLIST } from "../utils/config";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search } from "../components/Search";
import { Genre } from "../components/Genre";
import Shimmer from '../components/Shimmer';
import ShowCard from "../components/ShowCard";
import { useFetch } from "../utils/customhooks/useFetch";

const Dashboard = () => {
  const { data, isLoading, error } = useFetch(GET_URL_SHOWSLIST);
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  const sortShowsByRating = (order) => {
    const sortedShows = [...sortedData].sort((a, b) => {
      if (order === 'asc') {
        return a.rating.average - b.rating.average;
      } else {
        return b.rating.average - a.rating.average;
      }
    });
    setSortedData(sortedShows);
  };

  const allGeneres = useMemo(() => {
    const genres = new Set();
    if (data) {
      data.forEach((show) => show.genres.length && genres.add(...show.genres));
    }
    return Array.from(genres);
  }, [data]);

  const filterGenre = useCallback(
    (filterOnData) => {
      return filterOnData.filter((e) => e.genres.includes(selectedGenre));
    },
    [selectedGenre]
  );



  const onGenreClick = (event) => {
    const genre = event.target.value;
    setSelectedGenre(selectedGenre === genre ? "" : genre);
  };

 
  const onSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text.trim());
  };

   // Don't render component (Early return)
if (!data) {
  return <>Early return </>;
}

if (error) {
  return <>Error </>;
}

  return (
    <div className="container w-full mx-auto my-10">
      <div className="flex flex-col justify-between gap-2 mb-6 lg:flex-row mx-auto">
        <Search onSearchChange={onSearchChange} />
        <Genre
          allGeneres={allGeneres}
          onGenreClick={onGenreClick}
          selectedGenre={selectedGenre}
        />

        <select onChange={(e) => {
          setSortOrder(e.target.value);
          sortShowsByRating(e.target.value);
        }}>
          <option value="desc">Sort by Rating (Descending)</option>
          <option value="asc">Sort by Rating (Ascending)</option>
        </select>
      </div>
      
{ sortedData?.length === 0 ? (<Shimmer />) : 
    <div className="flex flex-wrap gap-5 justify-center">
      {sortedData.map((show) => {
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
