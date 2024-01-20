import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, img, name, rate, dsc, country } = food;
  return (
    <div
      key={id}
      className="h-full w-52 flex flex-col gap-1 text-gray-500 hover:cursor-pointer hover:scale-95  "
    >
      <div className="w-48">
        <img src={img} alt="" aria-label={name} className="rounded-md" />
      </div>

      <h1 className="font-bold">{name}</h1>
      <div className="flex gap-2">
        <StarIcon className="fill-white h-6 w-6 p-1 rounded-full bg-green-700 text-white" />
        <h1 className="font-semibold  overflow-hidden truncate">
          {rate + ".0"} {20 + Math.floor(Math.random() * 10 + 1)} mins
        </h1>
      </div>
      <p className="overflow-hidden truncate">
        {dsc}+{country}
      </p>
    </div>
  );
};

export default FoodCard;
