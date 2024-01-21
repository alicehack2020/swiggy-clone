import React from "react";
import FoodAccordion from "./FoodAccordion";

const FoodMenu = ({ accordionData, title }) => {
  return (
    <div className="mt-2">
      {accordionData && (
        <FoodAccordion accordionData={accordionData} title={title} />
      )}
    </div>
  );
};

export default FoodMenu;
