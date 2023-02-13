import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN } from "../config";
import ShimmerUi from "./ShimmerUi";
import useMenu from "../utils/useMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantMenu = useMenu(restaurantId);

  return !restaurantMenu ? (
    <ShimmerUi />
  ) : (
    <>
      <h1>RestaurantMenu : {restaurantId}</h1>
      <h3>{restaurantMenu.name}</h3>
      <h3>
        <img src={IMG_CDN + restaurantMenu.cloudinaryImageId} />
      </h3>
      <h4>{restaurantMenu.city}</h4>
      <h4>{restaurantMenu.totalRatings}</h4>
      <h4>{restaurantMenu.costForTwoMsg}</h4>
      <ul>
        {Object.values(restaurantMenu?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
