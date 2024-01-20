import React from "react";
import { handleImageError } from "../../utils/Helpers";
import { useNavigate } from "react-router-dom";

const HeroCard = ({ food }) => {
  const { id, img, name } = food;
  const Navigate = useNavigate();

  const NavigateHandle = (id) => {
    Navigate(`food/${id}`);
  };

  return (
    <div
      key={id}
      className="w-56 flex flex-col justify-center items-center hover:cursor-pointer"
      onClick={() => NavigateHandle(id)}
    >
      <div className="h-32 w-32 ">
        <img
          src={img}
          alt=""
          aria-label={name}
          className="rounded-full"
          onError={handleImageError}
        />
      </div>
      <h1 className="font-semibold text-gray-600     overflow-hidden truncate">
        {food.name}
      </h1>
    </div>
  );
};

export default HeroCard;
