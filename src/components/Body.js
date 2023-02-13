import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4922285&lng=73.9000204&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurantData(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantData(json.data?.cards[2]?.data?.data?.cards);
  }


  const offlineCheck = useOnline()

  if(!offlineCheck){
    return <h2>Check your internet</h2>
  }
  

  if(!allRestaurantData) return null

  return allRestaurantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Here"
          value={searchText}
          onChange={handleInput}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurantData);
            setFilteredRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="body">
        {filteredRestaurantData.map((list) => {
          return (
          <Link to={"/restaurant/"+list.data.id} key={list.data.id}>
          <RestaurantCard {...list.data}  />;
          </Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;
