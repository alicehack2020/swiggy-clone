import React from "react";

const HeroCard = ({ food }) => {
  const { id, img, name } = food;

  return (
    <div key={id} className="w-56 flex flex-col justify-center items-center ">
      <div className="h-32 w-32 ">
        <img src={img} alt="" aria-label={name} className="rounded-full" />
      </div>
      <h1 className="font-semibold text-gray-600     overflow-hidden truncate">
        {food.name}
      </h1>
    </div>
  );
};

export default HeroCard;
