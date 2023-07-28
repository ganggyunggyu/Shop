import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name : 'products',
  initialState : [
    {
      id: 0,
      title: "White and Black",
      content: "Born in France",
      price: 120000
    },
    {
      id: 1,
      title: "Red Knit",
      content: "Born in Seoul",
      price: 110000
    },
    {
      id: 2,
      title: "CGrey Yordan",
      content: "Born in the States",
      price: 130000
    },
    {
      id: 3,
      title: "Grey Yordan",
      content: "Born in the States",
      price: 12000
    },
    {
      id: 4,
      title: "FGrey Yordan",
      content: "Born in the States",
      price: 16000
    },    
    {
      id: 5,
      title: "DGrey Yordan",
      content: "Born in the States",
      price: 130000
    },
  ],
  reducers : {

  }
})

export default products;