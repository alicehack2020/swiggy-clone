import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItem = ({ menuData }) => {
  const { icon, label, href } = menuData;
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      {label === "Cart" ? (
        <Link
          className="flex text-gray-600 font-semibold hover:text-orange-500 hover:cursor-pointer gap-2 p-4"
          to={href}
        >
          <div className="h-6 w-6">{icon}</div>
          <h1>{label}</h1>
          <p>{cartItems && cartItems.length}</p>
        </Link>
      ) : (
        <Link
          className="flex text-gray-600 font-semibold hover:text-orange-500 hover:cursor-pointer gap-2 p-4"
          to={href}
        >
          <div className="h-6 w-6">{icon}</div>
          <h1>{label}</h1>
        </Link>
      )}
    </>
  );
};

export default MenuItem;
