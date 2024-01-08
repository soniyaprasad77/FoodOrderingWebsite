import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantInfo from "../../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantInfo(resId);
//console.log(resInfo)
  if (resInfo === null) return <ShimmerUI />;
 // console.log(resInfo?.cards[0]?.card?.card?.info);
  const { name, id, costForTwo, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const {
    nextOpenTime,
    nextOpenTimeMessage,
    restaurantClosedMeta,
    visibility,
  } = resInfo?.cards[0]?.card?.card?.info.availability;

  const {itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
  
  return (
    <div>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{nextOpenTime}</h3>
      <h3>{nextOpenTimeMessage}</h3>
      <h3>{restaurantClosedMeta.visibility}</h3>
      <h3>{visibility}</h3>
      <h4>Menu : </h4>
      <h6>{itemCards.map((item)=>(
        <li key={item.card.info.id}>
          {item.card.info.name} - {item.card.info.price || item.card.info.defaultPrice}
        </li>
      ))}</h6>
    </div>
  );
};

export default RestaurantInfo;
