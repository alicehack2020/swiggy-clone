import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DiscountCard = ({ offer }) => {
  const { header, couponCode, description } = offer;
  const notify = () => toast.success("coupon code copied");
  return (
    <div
      className="border border-gray-200 text-gray-500 text-sm font-medium py-2 px-1 rounded-lg w-fit  flex justify-between items-center hover:cursor-pointer shadow-md"
      onClick={() => {
        navigator.clipboard.writeText(couponCode ? couponCode : "New10");
        notify();
      }}
    >
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
      <ToastContainer />
    </div>
  );
};

export default DiscountCard;
