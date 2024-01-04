import React from "react";
import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, area, costForTwo, avgRating } = resData.info;
  const { nextCloseTime } = resData.info.availability;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_URL + resData.info.cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <h5>{nextCloseTime}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default RestaurantCard;
