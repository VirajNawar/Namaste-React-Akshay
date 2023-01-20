import { useState } from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("")

  const [restaurantData, setRestaurantData] = useState(restrauntList)

  const handleInput = (e) =>{
      setSearchText(e.target.value);
  }

  function filterData(searchText, restaurantData){
    const filteredData = restaurantData.filter((datas)=>
      datas.data.name.includes(searchText)
    )

    return filteredData
  }
  return (
    <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search Here" 
        value={searchText}
        onChange= {handleInput}
        />
        <button 
        onClick={()=>  {
         const data = filterData(searchText, restaurantData)
          setRestaurantData(data)
          }}>Search</button>  
      </div>
      
      <div className="body">
        {restaurantData.map((list) => {
          return <RestaurantCard {...list.data} key={list.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
