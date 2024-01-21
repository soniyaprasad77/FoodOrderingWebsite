import { SWIGGY_API } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";
import ShimmerUI from "./ShimmerUI.js"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if(resInfo===null) return <ShimmerUI/>
  const { name, costForTwo, cuisines} =
    resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards)
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)
    return (
      <>
      < div className="text-center" >
        <h1 className="font-bold p-2">{name}</h1> 
        <h1 className="font-bold py-2">{cuisines.join(', ')} - ₹{costForTwo/100}</h1>
          {categories.map((category)=>(
           
             <RestaurantCategory
             key={category?.card?.card.title}
             data={category?.card?.card}/>
            
          ))}
        
        </div>
      </>
    )

};

export default RestaurantMenu;
