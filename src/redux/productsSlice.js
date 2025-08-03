import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    decreaseQuantityToProduct: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        if (!item.quantity || item.quantity <= 1) {
          item.quantity = 1; // Don't go below 1
        } else {
          item.quantity -= 1;
        }
      }
    },
    addQuantityToProduct: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        if (!item.quantity) {
          item.quantity = 2;
        } else {
          item.quantity += 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.map((product) => ({
          ...product,
          quantity: 1,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addQuantityToProduct, decreaseQuantityToProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
