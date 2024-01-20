import React from "react";

const DiscountCard = ({ offer }) => {
  const { header, couponCode, description } = offer;

  return (
    <div className="border border-gray-200 text-gray-500 text-sm font-medium py-2 px-1 rounded-lg w-fit  flex justify-between items-center hover:cursor-pointer shadow-md">
      <h1 className="uppercase -rotate-90 text-[10px] text-red-700 border-b-2 border-gray-400">
        Flat deal
      </h1>

      <div className="text-xs flex flex-col justify-center  items-center -mt-3">
        <div>
          <img src="" alt="" className="h-4 w-4" />
          <span className="uppercase ">{header}</span>
        </div>
        {couponCode && <p>{couponCode + " | " + description}</p>}
      </div>
    </div>
  );
};

export default DiscountCard;
