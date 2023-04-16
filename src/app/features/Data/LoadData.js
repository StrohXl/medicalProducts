import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:8000/api";
export const loadData = createAsyncThunk(
  "data/Data",
  async (state, actions) => {
    const { data } = await axios.get(`${url}${state.endPoint}`, {
      params: {
        category: state.value,
        search: state.search,
      },
    });
    return data;
  }
);

export const Data = createSlice({
  name: "data",
  initialState: { value: 0, valueExtra: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state, actions) => {
        state.value = [];
      })
      .addCase(loadData.fulfilled, (state, actions) => {
        state.value = actions.payload;
      });
  },
});

export default Data.reducer;
