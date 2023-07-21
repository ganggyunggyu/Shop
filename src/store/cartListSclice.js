import { createSlice } from "@reduxjs/toolkit"

let cartList = createSlice({
  name : 'cartList',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    countPlus(state, id){
      state[id.payload]['count'] = state[id.payload]['count'] + 1
    },
    countMinus(state, id){
      state[id.payload]['count']-=1
    }
  }
})

export default cartList;