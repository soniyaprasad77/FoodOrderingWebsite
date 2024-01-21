import { IMG_URL } from "../../utils/constants";
const RestaurantItemList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between" key={item.card.info.id}>
          
          <div className="w-6/12">
          <div className="py-2">
               <span >{item.card.info.name}</span>
                <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-s">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute">
            <button className=" p-1 mx-16 rounded-sm bg-black text-white shadow-sm">
                Add +
            </button>
            </div>
            <img src={IMG_URL + item?.card?.info?.imageId} className="p-4"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
