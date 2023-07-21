import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
  name : 'user',
  initialState : { name : '경규', age : 500 },
  reducers : {
    agePlus(state){
      state['age'] = state['age'] + 1
    }
  }
})

export default user;