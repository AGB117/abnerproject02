import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalMenuItems: 0,
  totalCartItems: 0,
  totalCartPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalMenuItems++;
      //need a selector and pass that as a payload foe example add 3 of the same items to cart
      //push item so cartItems object
      //function to get the price of item an sum that to the total price
    },
    removeItem(state, action) {
      state.totalMenuItems--;
      //push item so cartItems object
      //function to get the price of item an substract that to the total price
    },
    addCartItem(state, action) {
      state.totalCartItems = state.totalCartItems + action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
