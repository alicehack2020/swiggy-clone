import React from "react";

const HeroShimmerUi = () => {
  return (
    <div>
      <div className="w-32 bg-gray-200 animate-pulse h-3"></div>

      <div className="flex overflow-auto gap-2">
        {[...Array(10)].map(() => (
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="bg-gray-200 animate-pulse rounded-full h-32 w-32 mt-2"></div>
            <div className="w-20 bg-gray-200 animate-pulse h-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroShimmerUi;
