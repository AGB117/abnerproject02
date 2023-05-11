import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
//reducer imports like cartReducer

const store = configureStore({
  reducer: { cart: cartReducer },
  // reducer: { cart: cartSlice.reducer },
});

export default store;
