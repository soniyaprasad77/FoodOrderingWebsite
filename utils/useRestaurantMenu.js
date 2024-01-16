import { RESTAURANT_MENU_API} from "./constants"
import { useState, useEffect } from "react";

const useRestaurantMenu =(resId) =>{ 
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchDataOfResMenu();
      }, []);
      const fetchDataOfResMenu = async () => {
        const resInfoData = await fetch( RESTAURANT_MENU_API + resId);
    
        const json = await resInfoData.json();
        setResInfo(json?.data);
      };

      return resInfo;
}

export default useRestaurantMenu;