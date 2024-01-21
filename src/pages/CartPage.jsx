import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodAccordionCard from "../components/card/FoodAccordionCard";
import { clearCart } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <button
        className="p-2 bg-red-400 rounded-md text-white font-medium uppercase"
        onClick={clearCartHandler}
      >
        clear
      </button>
      <div>
        {cartItems.map((foodData) => (
          <FoodAccordionCard foodData={foodData} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
