import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API} from "../../utils/constants.js";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
import { withVegLabel } from "./RestaurantCard.js";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    const restaurants =
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants);
 
    setFilteredResList(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline, Please check your internet connectivity</h1>;
  console.log(resList);
  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container p-4 m-4 ">
      <div className="filter flex justify-between">
      <button
         className="bg-red-100 px-4 rounded-lg"
          onClick={() => {
            console.log(resList)
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredList)
          }}
        >
          Top rated Restaurants
        </button>
        <div>
          <input
            className="search border border-solid border-black m-2 py-2 rounded-lg"
            type="text"
            value={searchText}
            size="70"
            placeholder="search restaurants"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-red-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRes);
            }}
          >
            Submit
          </button>
        </div>
  
      </div>
      <div div className="res-container mt-4 flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
          
          {restaurant.info.veg ? <RestaurantCardWithVegLabel resData={restaurant}/> : <RestaurantCard resData={restaurant} />}   
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
