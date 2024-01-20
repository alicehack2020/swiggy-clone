import React from "react";

const MenuItem = ({ menuData }) => {
  const { icon, label } = menuData;
  return (
    <div>
      <div className="h-6 w-6">{icon}</div>
      <h1>{label}</h1>
    </div>
  );
};

export default MenuItem;
