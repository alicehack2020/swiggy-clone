import React from "react";

const WithNewLabel = (MenuItem) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          htmlFor=""
          className="text-yellow-600 uppercase text-xs font-medium absolute top-2 right-0"
        >
          news
        </label>
        <MenuItem {...props} />
      </div>
    );
  };
};

export default WithNewLabel;
