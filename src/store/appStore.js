import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //we can name this anything plus this is a default also in the cartSlice so yah

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
