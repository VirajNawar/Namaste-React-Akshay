import { useState } from "react";
import { restrauntList } from "../config";
import ShimmerCard from "./ShimmerCard";

const ShimmerUi = () => {
  const [filteredRestaurantData, setFilteredRestaurantData] =
    useState(restrauntList);
  return (
    <>
      <div className="search-container flex justify-center mt-3">
        <input
          type="text"
          className="search-input mr-2 p-2 rounded-lg shadow-lg"
          placeholder="Search Here"
        />
        <button className="px-4 py-2 bg-[#ff732c] text-white rounded-lg shadow-lg shadow-[#ffcaaf] hover:shadow-[#ffa274]">
          Search
        </button>
      </div>

      <div className="body">
        {filteredRestaurantData.map((list) => {
          return <ShimmerCard {...list.data} key={list.data.id} />;
        })}
      </div>
    </>
  );
};

export default ShimmerUi;
