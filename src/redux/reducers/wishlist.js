import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.sku !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
