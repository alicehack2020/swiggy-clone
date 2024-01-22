import React from "react";
import useFeatchData from "../hook/useFeatchData";
import { END_POINT } from "../utils/Constants";
import HeroCard from "../components/card/HeroCard";
import FoodCard from "../components/card/FoodCard";
import HeroShimmerUi from "../components/shimmerui/HeroShimmerUi";
import LocationCardShimmerUI from "../components/shimmerui/LocationCardShimmerUI";
import GridCardShimmerUI from "../components/shimmerui/GridCardShimmerUI";

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
            <HeroCard food={food} key={food.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold ">
          Top restaurant chains in Aurangabad
        </h1>
        <div className="w-full flex overflow-auto space-x-10 py-4">
          {LocationFood?.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold ">
          Top restaurant chains in Aurangabad
        </h1>
        <div className="w-full py-4 grid grid-cols-2 sm:grid-cols-5 space-x-2 sm:space-x-1 gap-2 sm:gap-4 ">
          {BreadData?.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
