import { AiFillStar } from "react-icons/ai";

const ShowCard = ({name, language, image, rating, genres,  }) => {
  const buttonStyle = {
    backgroundColor: rating?.average === null ? "#dc3545" : parseFloat(rating?.average) < 7.0 ? "#fd7e14":"#28a745",
    color :  "#fff"
  }
  
  return (
    <div data-testid="show-card" className="basis-[210px] mob:basis-[150px] xsm:basis-[150px] sm:basis-[150px] p-2.5 mb-2.5 hover:shadow">
      <div  className="w-full">
        <img data-testid="show-image" className="w-full mob:w-[130px] xsm:w-[130px] sm:w-[130px]" src={image?.medium} alt={name}/>      
      </div>
      <div>
        <h6 data-testid="show-name"  className="text-base font-bold w-full tracking-normal">{name}</h6>
        <p data-testid="show-genres" className="text-gray-600 text-xs w-4/5 overflow-hidden h-[32px]">{genres.join(", ")}</p>
        <div className="flex mt-4 justify-between items-center text-xs pb-2 text-gray-700 font-semibold mob:flex-col mob:items-start">
          <div data-testid="show-rating" className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span>{rating.average? rating.average : "N/A" }</span>
          </div>
          <div data-testid="show-language" >{language}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowCard;