import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";
import Seasons from "../components/Seasons";
import { GET_URL_SHOWSLIST } from "../utils/config";
import { EpisodesProvider } from "../utils/context/EpisodesContext";

const ShowInfo = () => {
  const params = useParams();
  const showId = params?.id;
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShowInfo();
  }, []);

  const getShowInfo = async () => {
    try {
      const response = await fetch(`${GET_URL_SHOWSLIST}/${showId}`);
      const res_data = await response.json();
      setShow(res_data);
    } catch (error) {
      console.log(error);
    }
  };

  return !show ? (
    <>Loading...</>
  ) : (
    <React.Fragment>
      <div className="container flex justify-around sm:flex-col xsm:flex-col mob:flex-col">
        <div className="card-container w-[30%] h-2/4 sm:w-auto xsm:w-auto mob:w-auto">
          <Link data-testid="home" to="/" className="p-2 rounded-md bg-abnamro-yellow">
            Back to Home
          </Link>
          <ShowDetails {...show} />
        </div>
        <div className="card-container w-[70%] sm:w-auto xsm:w-auto mob:w-auto">
          <EpisodesProvider>
            <Seasons showId={showId} />{" "}
          </EpisodesProvider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowInfo;
