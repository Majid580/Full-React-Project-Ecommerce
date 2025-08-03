import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((x) => x.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity || 1;
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((x) => x.id !== action.payload.id);
    },
    clearCart: () => [],
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        alert("Product Not Found In Cart");
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
