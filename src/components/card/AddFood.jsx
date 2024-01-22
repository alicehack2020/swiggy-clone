import React from "react";
import { IMAGE_URL } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";

const AddFood = ({ foodData }) => {
  const { imageId } = foodData;
  const dispatch = useDispatch();
  const addFoodHanddler = () => {
    dispatch(addItem(foodData));
  };
  const removeFoodHanddler = () => {
    dispatch(removeItem(foodData));
  };

  return (
    <div className="relative">
      <img src={IMAGE_URL + "/" + imageId} alt="" className="h-20 " />
      <div className="py-1 bg-black text-white rounded-lg w-20 absolute bottom-1 right-1 border border-gray-200 flex justify-evenly ">
        <button onClick={removeFoodHanddler}>-</button>
        <button onClick={addFoodHanddler} data-testid="addFood">
          add +
        </button>
      </div>
    </div>
  );
};

export default AddFood;
