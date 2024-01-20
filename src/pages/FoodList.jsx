import React from "react";
import { END_POINT } from "../utils/Constants";
import useFeatchData from "../hook/useFeatchData";
import { StarIcon } from "@heroicons/react/24/outline";
import OfferSection from "../components/OfferSection";
const FoodList = () => {
  const { foodData } = useFeatchData(END_POINT.LUNCH_BOX);

  if (!foodData) {
    return <h1>Loading......</h1>;
  }

  const cards = foodData?.data?.cards;
  const HotelInfo = cards[0]?.card?.card?.info;
  const offers = cards[1]?.card?.card?.gridElements.infoWithStyle.offers;
  const accordionData = cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  console.log(offers);

  return (
    <div>
      <div className="text-gray-500 border-b-2 border-dotted py-2">
        <div className="flex justify-between">
          <div className="text-sm">
            <h1 className="text-xl font-medium text-gray-900">
              {HotelInfo.name}
            </h1>
            <p>North Indian, Biryani</p>
            <p>
              {HotelInfo.city +
                " " +
                HotelInfo.areaName +
                " " +
                HotelInfo.sla.lastMileTravelString}{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-1 py-2 h-fit bg-white border border-gray-200 rounded-lg shadow-ms">
            <div className="flex gap-2 text-green-900 justify-center">
              <StarIcon className="h-4 w-4 fill-green-900" />
              <h1 className="font-semibold text-sm">{HotelInfo.avgRating}</h1>
            </div>
            <div className="w-full border-t-2"></div>
            <p className="text-gray-600 font-medium text-xs">
              {HotelInfo.totalRatingsString}
            </p>
          </div>
        </div>
        <p className="text-sm">Order above 149 for discounted delivery fee</p>
      </div>

      <OfferSection offer={offers} />
    </div>
  );
};

export default FoodList;
