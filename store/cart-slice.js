import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalCartItems: 0,
  totalCartPrice: 0,
  totalMenuItems: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increaseItemQuantity(state) {
      state.totalMenuItems++;
    },
    decreaseItemQuantity(state) {
      state.totalMenuItems--;
    },
    addItemCart(state) {
      state.totalMenuItems++;
    },
    removeItemCart(state) {
      state.totalMenuItems--;
    },
    pushCartItem(state, action) {
      state.cartItems.push(action.payload);
    },
    deleteCartItem(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    calculateTotalPriceCart(state) {
      state.totalCartPrice = state.cartItems.reduce(
        (sum, item) => sum + item.price,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
