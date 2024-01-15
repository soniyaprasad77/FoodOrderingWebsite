import React from "react";
import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, area, costForTwo, avgRating } = resData.info;
  const { nextCloseTime } = resData.info.availability;
  return (
    <div
      className="res-card w-[332px] m-4 rounded-xl bg-[#f0f0f0] hover:bg-gray-200"
    >
      <div className="p-4">
        <img
          className="res-logo rounded-xl "
          src={IMG_URL + resData.info.cloudinaryImageId}
        />
        <h4 className="font-bold py-2">{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
        <h5>{nextCloseTime}</h5>   
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
 return (props) => {
  return (
    <div>
      <label className="absolute bg-black text-white rounded-lg m-3 p-1">Vegeterian</label>
      <RestaurantCard {...props}/>
    </div>
  )
 }
}

export default RestaurantCard;
