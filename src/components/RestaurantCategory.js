import RestaurantItemList from "./RestaurantItemList";
import { useState} from "react";

 // controlled component:  lifting the state up 
const RestaurantCategory = ({ data, showItems, setShowItems })=> {
  const handleClick =() =>{
    setShowItems();
  }
  
   console.log(data);
    return (
        <div className="header">
          <div className="w-6/12 m-2 p-4 bg-gray-100 mx-auto rounded-sm shadow-lg">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="text-lg font-bold">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span> 
            </div>
            {showItems && <RestaurantItemList items = {data.itemCards}/>}
          </div>

         
        </div>
    )
}

export default RestaurantCategory;