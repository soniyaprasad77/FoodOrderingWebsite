import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },

    //originalState = [{items: "pizza"}]
    clearCart: (state) => {
      //RTK -- either mutate the existing state or return a new state
      //mutating the state
      state.items.length = 0;
      //returning a new state
      //return {items:[]};  //this new [] will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
