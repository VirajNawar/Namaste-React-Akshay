import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const res = await fetch(FETCH_MENU_URL + restaurantId);
    const data = await res.json();
    console.log(data.data);
    setRestaurantMenu(data.data);
  }

  return restaurantMenu;
}; 

export default useMenu;
