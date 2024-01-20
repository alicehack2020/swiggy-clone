import React from "react";

const WithNewLabel = (MenuItem) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">new</label>
        <MenuItem {...props} />
      </div>
    );
  };
};

export default WithNewLabel;
