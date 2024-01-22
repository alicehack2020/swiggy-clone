import React from "react";
import { IMAGE_URL } from "../../utils/Constants";

const FoodDetailModal = ({ foodData, setFoodModalOpen }) => {
  const { imageId } = foodData;
  return (
    <div className="w-fit h-fit bg-white rounded-lg absolute z-20 top-1/3 left-1/3 p-4 shadow-md">
      <div>
        <div className="flex justify-end  m-2">
          <button
            className="bg-black rounded-full font-bold text-xl text-white px-2"
            onClick={() => setFoodModalOpen(false)}
          >
            x
          </button>
        </div>

        <div>
          <img
            src={IMAGE_URL + "/" + imageId}
            alt=""
            className="h-56 w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDetailModal;
