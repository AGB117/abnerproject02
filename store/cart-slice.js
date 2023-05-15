import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalCartItems: 0, //total items in cart
  totalCartPrice: 0, //total price of item
  totalMenuItems: 0, // total of that item to push to cart
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
      ); //index  gices the position of the first item with intented id

      if (index !== -1) {
        state.cartItems.splice(index, 1);
      } //if index is 0 or higher then splice starts at index and stops one step later hence it deletes one object from the array with intended id.
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
