import React from "react";
import LocationPicker from "./LocationPicker";
import { NavigationDataWeb } from "../utils/NavigationData";
import MenuItem from "./menu/MenuItem";
import WithNewLabel from "./hoc/withLabelNew";
const NavBar = () => {
  const NewLabel = WithNewLabel(MenuItem);
  return (
    <div>
      <div>
        <img src="" alt="" aria-label="home icon" />
        <LocationPicker />
      </div>
      <div>
        {NavigationDataWeb.map((data) =>
          data.isNew ? (
            <NewLabel menuData={data} />
          ) : (
            <MenuItem menuData={data} />
          )
        )}
      </div>
    </div>
  );
};

export default NavBar;
