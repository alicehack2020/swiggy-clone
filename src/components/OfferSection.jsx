import { ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import React from "react";
import DiscountCard from "./card/DiscountCard";

const OfferSection = ({ offer }) => {
  return (
    <div className="space-y-4 mt-2">
      <div className="flex space-x-4 text-gray-600">
        <div className="flex font-bold gap-4">
          <ClockIcon className="h-5 w-5" />
          <h1>36MINS</h1>
        </div>
        <div className="flex font-bold gap-4">
          <CurrencyRupeeIcon className="h-5 w-5" />
          <h1>₹600 for two</h1>
        </div>
      </div>
      <div className="flex gap-4">
        {offer.map((offerData) => (
          <DiscountCard offer={offerData.info} />
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
