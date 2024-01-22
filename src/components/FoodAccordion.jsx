import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import FoodAccordionCard from "./card/FoodAccordionCard";

const FoodAccordion = ({ accordionData, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2 bg-gray-100">
      <div className="p-2 space-y-2 bg-white" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="font-bold text-lg text-gray-800" data-testid="accordionTitle">{title}</h1>
        <div className="flex justify-between hover:cursor-pointer">
          <h2 className="text-base"> Veg ({accordionData?.length})</h2>
          <ChevronUpIcon
            className={`h-5 w-5 text-gray-500 font-bold ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen &&
        accordionData?.map((foodData) => (
          <FoodAccordionCard foodData={foodData.card.info} />
        ))}
    </div>
  );
};

export default FoodAccordion;
