import RestaurantItemList from "./RestaurantItemList";
import { useState} from "react";

 // controlled components:  lifting the state up 
const RestaurantCategory = ({ data, showItems, setShowItems, dummy })=> {
  const handleClick =() =>{
    setShowItems();
  }
  
    return (
        <div className="header">
          <div className="w-6/12 m-2 p-4 bg-gray-100 mx-auto rounded-sm shadow-lg">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="text-lg font-bold">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span> 
            </div>
            {showItems && <RestaurantItemList items = {data.itemCards} dummy={dummy}/>}
          </div>

         
        </div>
    )
}

export default RestaurantCategory;