import { RESTAURANT_INFO_URL } from "./constants"
import { useState, useEffect } from "react";

const useRestaurantInfo =(resId) =>{ 
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchDataOfResMenu();
      }, []);
      const fetchDataOfResMenu = async () => {
        const resInfoData = await fetch( RESTAURANT_INFO_URL + resId);
    
        const json = await resInfoData.json();
        console.log(json?.data);
        setResInfo(json?.data);
      };

      return resInfo;
}

export default useRestaurantInfo;