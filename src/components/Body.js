import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { swiggy_api_bangaluru } from "../../utils/constants.js";
const Body = () => {
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const resList  = useResData();
  // console.log(resList);
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(swiggy_api_bangaluru);
    // const data = await fetch(SWIGGY_API_MOTIHARI);
    const jsonData = await data.json();
    const restaurantBangaluru =
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurantBangaluru);
    setFilteredResList(restaurantBangaluru);
  }

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
          <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id
        }><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body
