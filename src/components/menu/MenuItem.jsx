import React from "react";

const MenuItem = ({ menuData }) => {
  const { icon, label } = menuData;
  return (
    <div className="flex text-gray-600 font-semibold hover:text-orange-500 hover:cursor-pointer gap-2 p-4">
      <div className="h-6 w-6">{icon}</div>
      <h1>{label}</h1>
    </div>
  );
};

export default MenuItem;
