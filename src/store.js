import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSclice.js'
import cartList from './store/cartListSclice.js'




export const { agePlus } = user.actions
export const { countPlus, countMinus } = cartList.actions


export default configureStore({
  reducer: {
    cartList : cartList.reducer,
    user : user.reducer
  },
});
