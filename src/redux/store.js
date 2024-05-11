import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import wishlistReducer from "./reducers/wishlist";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist: wishlistReducer,
  },
});
