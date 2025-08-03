import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productsSlice";
import cartReducer from "../redux/cartSlice";
export const store = configureStore({
  reducer: { products: productReducer, cart: cartReducer },
});
