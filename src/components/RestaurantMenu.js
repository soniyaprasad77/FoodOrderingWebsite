import { SWIGGY_API } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI.js"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if(resInfo===null) return <ShimmerUI/>
  const { name, costForTwo } =
    resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return (
      <>
      <div className="flex justify-center" >
        <h1 className="font-bold p-4">{name}</h1> 
        <h1 className="font-bold p-4">₹{costForTwo/100}</h1>
        </div>
      </>
    )

};

export default RestaurantMenu;
