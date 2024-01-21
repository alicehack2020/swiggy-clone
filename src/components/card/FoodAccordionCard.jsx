import React from "react";
import { IMAGE_URL } from "../../utils/Constants";

const FoodAccordionCard = ({ foodData }) => {
  const { name, description, imageId, price } = foodData;
  return (
    <div className="flex justify-between space-y-2  border-b-2 border-gray-300 p-2 bg-white">
      <div>
        <div>
          <div className="text-green-800"></div>
          <h1 className="text-base font-medium">{name}</h1>
          <span className="text-xs">{price}</span>
        </div>
        <p className="text-xs">{description}</p>
      </div>
      <div>
        <img src={IMAGE_URL + "/" + imageId} alt="" className="h-20 " />
      </div>
    </div>
  );
};

export default FoodAccordionCard;
