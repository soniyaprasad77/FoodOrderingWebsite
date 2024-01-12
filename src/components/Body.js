import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { swiggy_api_bangaluru } from "../../utils/constants.js";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_bangaluru);
    const jsonData = await data.json();
    console.log(jsonData);
    const restaurantBangaluru =
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        console.log(restaurantBangaluru)
    setResList(restaurantBangaluru);
    setFilteredResList(restaurantBangaluru);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline, Please check your internet connectivity</h1>;

// console.log(resList);
  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            size="70"
            placeholder="search restaurants"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResList(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
