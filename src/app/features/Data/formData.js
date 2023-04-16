import { createSlice } from "@reduxjs/toolkit";

export const formDate = createSlice({
  name: "formDate",
  initialState: {
    name: "",
    description: "",
    stock: "",
    category: "",
    price: '',
    productImage: "",
  },
  reducers: {
    changeformDateName: (state, actions) => {
      state.name = actions.payload;
    },
    changeformDateDescription: (state, actions) => {
      state.description = actions.payload;
    },
    changeformDateStock: (state, actions) => {
      state.stock = actions.payload;
    },
    changeformDateCategory: (state, actions) => {
      state.category = actions.payload;
    },
    changeformDateProductImage: (state, actions) => {
      state.productImage = actions.payload;
    },
    changeformDatePrice: (state, actions) => {
      state.price = actions.payload;
    },
  },
});
export const {
  changeformDatePrice,
  changeformDateName,
  changeformDateCategory,
  changeformDateDescription,
  changeformDateProductImage,
  changeformDateStock
} = formDate.actions;
export default formDate.reducer;
