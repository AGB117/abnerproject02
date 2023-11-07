import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [], //need to initialize the values with blank numbers and strings
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    //add or increase
    addItemCart(state, action) {
      //find the index
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //push item to carItems[] or increase the quantity if the item is already in the cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    //removal decrease
    removeItemCart(state) {
      state.totalMenuItems--;
    },
    decreaseItemQuantity(state) {
      state.totalMenuItems--;
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
