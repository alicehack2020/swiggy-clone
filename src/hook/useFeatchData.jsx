import { useCallback, useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../utils/Constants";

const useFeatchData = (endpoint) => {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    getDataCallBack();
  }, []);

  const getDataCallBack = useCallback(async () => {
    const data = await fetch(`${BASE_URL}/${endpoint}`);
    const res = await data.json();
    setFoodData(res);
  }, [endpoint]);

  return { foodData, setFoodData };
};

export default useFeatchData;
