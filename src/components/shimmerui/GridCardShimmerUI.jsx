import React from "react";

const GridCardShimmerUI = () => {
  return (
    <div>
      <div className="w-32 bg-gray-200 animate-pulse h-3"></div>

      <div className="grid grid-cols-1 sm:grid-cols-7 ">
        {[...Array(20)].map(() => (
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="bg-gray-200 animate-pulse rounded-xl h-32 w-32 mt-2 space-y-1 p-2">
              <div className="h-16 w-full bg-gray-300"></div>
              <div className="w-10 bg-gray-400 animate-pulse h-3"></div>
              <div className="w-full bg-gray-400 animate-pulse h-3"></div>
              <div className="w-1/2 bg-gray-400 animate-pulse h-3"></div>
            </div>
            <div className="w-20 bg-gray-200 animate-pulse h-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCardShimmerUI;
