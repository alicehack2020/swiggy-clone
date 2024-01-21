import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { BASE_URL, END_POINT } from "../utils/Constants";
import FoodCard from "../components/card/FoodCard";

const SearchFood = () => {
  const [data, setData] = useState(null);
  const [copyData, SetCopydata] = useState(null);
  const [searchFood, setSearchFood] = useState("");

  useEffect(() => {
    getFoodData();
  }, []);

  const getFoodData = async () => {
    let data = await fetch(`${BASE_URL}/${END_POINT.ICE_CREAM}`);
    let res = await data.json();
    setData(res);
    SetCopydata(res);
  };

  const findData = () => {
    let find = data.filter((food) =>
      food.name.toLowerCase().includes(searchFood.toLowerCase())
    );
    SetCopydata(find);
  };

  return (
    <div className="px-10">
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center  bg-green-500 rounded-md w-1/3">
          <input
            type="text"
            placeholder="Search Food Name"
            value={searchFood}
            onChange={(event) => setSearchFood(event.target.value)}
            className="p-2 border border-gray-400 outline-none w-full rounded-md border-r-0"
          />

          <MagnifyingGlassIcon
            className="h-10 w-10 text-white px-1 hover:cursor-pointer"
            data-testid="search"
            onClick={findData}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 gap-4 mt-4">
        {copyData &&
          copyData?.map((foodData) => (
            <div className="p-2 bg-gray-200 w-fit rounded-md" key={foodData.id}  data-testid="searchCard">
              <FoodCard food={foodData} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchFood;
