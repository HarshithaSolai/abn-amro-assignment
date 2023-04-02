import {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShowInfoShimmer } from "../components/Shimmer";
import CastMember from "../components/CastMember";
import ShowDetails from '../components/ShowDetails';
import {AiFillStar} from 'react-icons/ai';
import { GET_URL_SHOWSLIST } from "../utils/config";

const ShowInfo = (match) => {
  const params = useParams();
  const showId = params?.id;
  const [show, setShow] = useState(null);  

  useEffect(() => {
    getShowInfo();
  }, []);

  const getShowInfo = async () => {
    try {
      /* Live Data */
      const response = await fetch(`${GET_URL_SHOWSLIST}/${showId}?embed=cast`);
      const res_data = await response.json();
      setShow(res_data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return !show ? (
    <ShowInfoShimmer />
    ) : (
    <div className="container">
      <Link data-testid="home" to="/"  className="px-2 mr-2 border-b-2 outline-none bg-abnamro-yellow">
          Back to Home
      </Link> {">"}
      <Link  to={`/show/${show.id}`}  className="px-2 ml-2 border outline-none bg-abnamro-yellow">
          {show.name}
      </Link> 
     
      <div className="flex basis-full h-60 justify-evenly items-center bg-abnamro-green text-title p-8">
        <img className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]" src={show.image.medium} alt={show.name}/>
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold text-white">{show.name}</h2>

          <div data-testid="summary" className="text-white text-[15px] max-w-[538px]"
          dangerouslySetInnerHTML={{ __html: show.summary }}
          ></div>

        </div>
      </div>

      <div className="mt-7 flex justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center w-[30%] h-[400px] bg-abnamro-green">
            <ShowDetails {...show}/>
          </div>
          <div className="flex flex-wrap justify-evenly w-[70%]">
            { (show?._embedded?.cast).map( cast => {
              return (
              <CastMember {...cast} key={cast.character.id}/>
              )
            }
            )}
          </div>
        

      </div>
    </div>
  )
}

export default ShowInfo;