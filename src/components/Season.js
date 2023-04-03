import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Episodes from "./Episodes";

const Season = ({ season, setIsVisible, isVisible }) => {
  return (
    <div className="flex flex-col pl-5 pt-2" key={season.number}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer text-abnamro-green"
          onClick={() => setIsVisible(!isVisible)}
        >
          Season : {season.number} ({season.episodeOrder} episodes)
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={() => setIsVisible(!isVisible)} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={() => setIsVisible(!isVisible)} className="cursor-pointer"/>
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col justify-evenly">
          <Episodes seasonId={season.id}/>
        </div>
      )}
    </div>
  );
};

export default Season;
