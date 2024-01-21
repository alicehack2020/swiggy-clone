import React, { useState } from "react";
import LocationPicker from "./LocationPicker";
import { NavigationDataWeb } from "../utils/NavigationData";
import MenuItem from "./menu/MenuItem";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import WithNewLabel from "./hoc/WithLabelNew.jsx";
const NavBar = () => {
  const NewLabel = WithNewLabel(MenuItem);
  const [online, setOnline] = useState(true);
  return (
    <div className="flex justify-around bg-white shadow-lg">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <HomeIcon className="h-10 w-10" />
        </Link>

        <LocationPicker />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {NavigationDataWeb.map((data, index) =>
          data.isNew ? (
            <NewLabel menuData={data} key={index} />
          ) : (
            <MenuItem menuData={data} key={index} />
          )
        )}
      </div>
      <button
        onClick={() => setOnline(!online)}
        className={`p-1 ${online ? "bg-green-500" : "bg-red-500"} text-white`}
      >
        {online ? "online" : "offline"}
      </button>
    </div>
  );
};

export default NavBar;
