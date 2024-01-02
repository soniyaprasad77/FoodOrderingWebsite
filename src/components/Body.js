import React from 'react'
import RestaurantCard from './RestaurantCard.js';
import { useEffect } from 'react';
import { useState } from 'react';
const Body = () => {
    //const [resList, setResList] = useState(restaurantList);
    const [resList, setResList] = useState([]);
    useEffect(()=>{
     fetchData();
    }, [])
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.6547297&lng=84.9206098")
  
      const jsonData = await data.json();
      console.log( jsonData?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      //jsonData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants[0].info
      setResList(jsonData?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      }
      
    return (
      <div className="body-container">
        <div className="search">Search</div>
        <div className="filter">
          <button 
          className='filter-btn'
          onClick={()=>{
            const filteredList = resList.filter((res)=>res.info.avgRating>4
            )
           setResList(filteredList)
        }
        }
          >Top rated Restaurants</button>
        </div>
        <div div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;