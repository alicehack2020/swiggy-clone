import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { handleImageError } from "../../utils/Helpers";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { id, img, name, rate, dsc, country } = food;

  const Navigate = useNavigate();

  const NavigateHandle = (id) => {
    Navigate(`food/${id}`);
  };

  return (
    <div
      key={id}
      className="h-full sm:w-52 w-40 flex flex-col gap-1 text-gray-500 hover:cursor-pointer hover:scale-95"
      onClick={() => NavigateHandle(id)}
    >
      <div className="w-full   relative">
        <img
          src={img}
          alt=""
          aria-label={name}
          className="rounded-md  "
          onError={handleImageError}
        />
        <h1 className="absolute uppercase bottom-1 left-2 font-extrabold text-white text-base shadow-black shadow-sm p-1">
          $120 off above $199
        </h1>
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
