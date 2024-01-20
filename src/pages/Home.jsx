import React from "react";
import useFeatchData from "../hook/useFeatchData";
import { END_POINT } from "../utils/Constants";
import HeroCard from "../components/card/HeroCard";
import FoodCard from "../components/card/FoodCard";

const Home = () => {
  const { foodData: heroFood } = useFeatchData(END_POINT.BEST_FOODS);
  const { foodData: LocationFood } = useFeatchData(END_POINT.BBQS);
  const { foodData: BreadData } = useFeatchData(END_POINT.BREADS);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold ">What's on your mind?</h1>
        <div className="w-full flex overflow-auto space-x-10 py-4">
          {heroFood?.map((food) => (
            <HeroCard food={food} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold ">
          Top restaurant chains in Aurangabad
        </h1>
        <div className="w-full flex overflow-auto space-x-10 py-4">
          {LocationFood?.map((food) => (
            <FoodCard food={food} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold ">
          Top restaurant chains in Aurangabad
        </h1>
        <div className="w-full py-4 grid grid-cols-4 gap-4">
          {BreadData?.map((food) => (
            <FoodCard food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
