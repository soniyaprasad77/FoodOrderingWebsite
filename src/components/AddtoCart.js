import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../../utils/cartSlice";

const AddtoCart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold ">Cart Items</h1>
      <div className="w-6/12 m-auto">
        <RestaurantItemList items={cartItems} />
      </div>
      <button
        className="bg-red-100 px-4 py-2 rounded-lg my-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length===0 && <h1>Your Cart is Empty. Add items to your cart.</h1>}
    </div>
  );
};

export default AddtoCart;
