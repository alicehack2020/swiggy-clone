import React from "react";
import LocationPicker from "./LocationPicker";
import { NavigationDataWeb } from "../utils/NavigationData";
import MenuItem from "./menu/MenuItem";
import WithNewLabel from "./hoc/withLabelNew";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const NavBar = () => {
  const NewLabel = WithNewLabel(MenuItem);

  return (
    <div className="flex justify-around bg-white shadow-lg">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <HomeIcon className="h-10 w-10" />
        </Link>

        <LocationPicker />
      </div>
      <div className="grid grid-cols-5 gap-2">
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
