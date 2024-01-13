import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantInfo from "../../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);
  //console.log(resInfo)
  if (resInfo === null) return <ShimmerUI />;
  //console.log(resInfo?.cards[0]?.card?.card?.info);
  const { name, id, costForTwo, cuisines, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;
  const {
    nextOpenTime,
    nextOpenTimeMessage,
    restaurantClosedMeta,
    visibility,
  } = resInfo?.cards[0]?.card?.card?.info.availability;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="res-card w-100% m-4 rounded-xl bg-pink-100 flex flex-wrap justify-between">
      <h1 className="font-bold px-8 mx-8">{name}</h1>
      <h2 className="font-bold px-8 mx-8">{id}</h2>
      <h3 className="font-bold px-8 mx-8">{cuisines.join(", ")}</h3>
      <h3 className="font-bold px-8 mx-8">{costForTwo}</h3>
      <h3 className="font-bold px-8 mx-8">{nextOpenTime}</h3>

      <h6 className="flex flex-wrap list-none">
        {itemCards.map((item) => (
          <>
            <div className=" w-[332px] m-4 rounded-xl bg-slate-50 flex justify-center flex-wrap ">
              <img
                className=" w-56 rounded-xl p-4"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  item.card.info.imageId
                }
              />
              <li className="bg-green p-4" key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price || item.card.info.defaultPrice}
              </li>
            </div>
          </>
        ))}
      </h6>
    </div>
  );
};

export default RestaurantInfo;
