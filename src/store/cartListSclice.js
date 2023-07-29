import { createSlice } from "@reduxjs/toolkit";

let cartList = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    countPlus(state, id) {
      state[id.payload]["count"] += 1;
    },
    countMinus(state, id) {
      state[id.payload]["count"] -= 1;
    },
    cartDelete(state, id) {
      state.splice(id.payload, 1);
    },
    cartAdd(state, el) {
      // for (let i = 0; i < state.length; i++) {
      //   if (state[i]["title"] === el.payload["title"]) {
      //     state[i]["count"] += 1;
      //     return;
      //   }
      // }
      // el.payload["count"] += 1;
      let copyProduct = el.payload;
      state.push(copyProduct);
    },
  },
});

export default cartList;
