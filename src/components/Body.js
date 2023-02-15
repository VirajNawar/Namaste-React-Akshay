import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useData from "../utils/useData";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const {
    allRestaurantData,
    filteredRestaurantData,
    setAllRestaurantData,
    setFilteredRestaurantData,
  } = useData([]);

  const offlineCheck = useOnline();

  if (!offlineCheck) {
    return <h2>Check your internet</h2>;
  }

  if (!allRestaurantData) return null;

  return allRestaurantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container flex justify-center mt-3 ">
        <input
          type="text"
          className="search-input mr-2 p-2 rounded-lg shadow-lg"
          placeholder="Search Here"
          value={searchText}
          onChange={handleInput}
        />
        <button
          className="px-4 py-2 bg-[#ff732c] text-white rounded-lg shadow-lg shadow-[#ffcaaf] hover:shadow-[#ffa274]"
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
            <Link to={"/restaurant/" + list.data.id} key={list.data.id}>
              <RestaurantCard {...list.data} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
