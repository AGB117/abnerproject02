import { configureStore } from "redux";
//import cartReducer from "./cartReducer"
//reducer imports like cartReducer

const store = configureStore({
  reducer: { cartState: cartReducer },
});

export default store;
