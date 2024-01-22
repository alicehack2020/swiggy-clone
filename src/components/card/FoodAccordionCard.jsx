import React from "react";
import AddFood from "./AddFood";

const FoodAccordionCard = ({ foodData }) => {
  const { name, description, imageId, price } = foodData;
  return (
    <div className="flex justify-between space-y-2  border-b-2 border-gray-300 p-2 bg-white" data-testid="accordionSubListCart">
      <div>
        <div>
          <div className="text-green-800"></div>
          <h1 className="text-base font-medium">{name}</h1>
          <span className="text-xs">{price}</span>
        </div>
        <p className="text-xs">{description}</p>
      </div>

      <AddFood foodData={foodData} />
    </div>
  );
};

export default FoodAccordionCard;
