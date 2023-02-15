import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DATA_URL } from "../config";

const useData = () => {
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_DATA_URL);
    const json = await data.json();
    console.log(json);
    setAllRestaurantData(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantData(json.data?.cards[2]?.data?.data?.cards);
  }

  return {allRestaurantData,filteredRestaurantData,setAllRestaurantData,setFilteredRestaurantData}
};

export default useData;
