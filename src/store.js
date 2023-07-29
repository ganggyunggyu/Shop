import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSclice.js";
import cartList from "./store/cartListSclice.js";
import products from "./store/productSlice.js";

export const { agePlus } = user.actions;
export const { countPlus, countMinus, cartDelete, cartAdd } = cartList.actions;
export const { abcSort, defaultSort } = products.actions;

export default configureStore({
  reducer: {
    cartList: cartList.reducer,
    user: user.reducer,
    products: products.reducer,
  },
});
