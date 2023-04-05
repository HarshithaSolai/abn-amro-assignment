import { SHIMMER_SHOW_CARDS_COUNT } from '../utils/config';

const CardShimmer = () => {
  return (
    <div data-testid="card-shimmer" className="basis-[210px] mob:basis-[150px] p-2.5 mb-2.5 shadow animate-pulse">
      <div className="h-[239px] w-full bg-shimmer-gray mob:w-[130px] mob:h-[81px]"></div>
      <div className="w-3/5 mt-2.5 h-[15px]  bg-shimmer-gray "></div>
      <div className="w-4/5 mt-1 h-[15px]  bg-shimmer-gray"></div>
      <div className="w-full mt-[18px] h-[15px]  bg-shimmer-gray"></div>
    </div>
  );
}

const Shimmer = () => { 
  return (
    <div data-testid="shimmer" className="flex flex-wrap gap-5 justify-evenly">
      {Array.from({length:SHIMMER_SHOW_CARDS_COUNT}).map((element, index) => {
        return <CardShimmer key ={index} />
      }) }
    </div>   
  )
}

export default Shimmer;