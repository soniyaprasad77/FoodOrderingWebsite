import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { useEffect } from "react";
import { useState } from "react";
import { SWIGGY_API, swiggy_api_banglore } from "../../utils/constants.js";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_banglore);
    //const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setResList(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResList(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setResList(
    //   jsonData?.data?.success?.cards?.[1]?.gridWidget?.gridElements
    //     ?.infoWithStyle?.restaurants
    // );
    // setFilteredResList(
    //   jsonData?.data?.success?.cards?.[1]?.gridWidget?.gridElements
    //     ?.infoWithStyle?.restaurants
    // );
  };

  return resList.length === 0 ? <ShimmerUI />: (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
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
              (res) => res.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
