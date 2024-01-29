import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../../utils/constants.js";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
import { withVegLabel } from "./RestaurantCard.js";
import UserContext from "../../utils/UserContext.js";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);

      if (!data.ok) {
        throw new Error(`Failed to fetch data. Status: ${data.status}`);
      }

      const jsonData = await data.json();
      const restaurants =
        jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setResList(restaurants);
        setFilteredResList(restaurants);
      } else {
        throw new Error("Unable to parse data or data structure is incorrect");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle the error, e.g., show an error message to the user or set a default state.
      setError(
        "Apologies, restaurant information is currently offline. Kindly retry later."
      );
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline, Please check your internet connectivity</h1>;
  console.log(resList);
  return resList.length === 0 ? (
    <>
      {error ? (
        <div
          style={{
            color: "red",
            margin: "10px 0",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error}
        </div>
      ) : (
        <ShimmerUI />
      )}
    </>
  ) : (
    <>
      <div className="body-container p-4 m-4 ">
        <div className="filter flex justify-between">
          <button
            className="bg-red-100 px-4 rounded-lg"
            onClick={() => {
              console.log(resList);
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResList(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
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
              {restaurant.info.veg ? (
                <RestaurantCardWithVegLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
