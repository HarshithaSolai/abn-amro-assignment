import React from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Episode = ({episode, setIsVisible, isVisible  }) => {
  return (
    <div className="flex flex-col p-5" key={episode.number}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer text-abnamro-green" onClick={() => setIsVisible(!isVisible)} >
          Episode : {episode.number} {episode.name}
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={() => setIsVisible(!isVisible)} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={() => setIsVisible(!isVisible)} className="cursor-pointer" />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col justify-evenly">
          <div data-testid="episode-summary" className=" text-[15px] max-w-[538px] text-justify"
            dangerouslySetInnerHTML={{ __html: episode.summary }}
          ></div>
          <p data-testid="episode-rating"><span className="font-bold">Rating:</span> {episode.rating?.average}</p>
          <p data-testid="episode-type"><span className="font-bold">Type: </span> {episode.type || "Not Available"}</p>
          <p data-testid="episode-network"><span className="font-bold">Network: </span> {episode.network?.name || "Not Available"}</p>
          <p data-testid="episode-runtime"><span className="font-bold">Runtime: </span> {episode.runtime} min</p>
        </div>
      )}
    </div>
  )
}

export default Episode