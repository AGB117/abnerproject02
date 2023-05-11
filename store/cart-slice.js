import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalItems: 0,
  totalPrice: 0,
  //   cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state) {
      state.totalItems++;
      //push item so cartItems object
      //function to get the price of item an sum that to the total price
    },
    removeItem(state) {
      state.totalItems--;
      //push item so cartItems object
      //function to get the price of item an substract that to the total price
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
