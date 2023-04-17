import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://localhost:8000/api";
import axios from "axios";
export const loadEditData = createAsyncThunk(
  "data/editData",
  async (state, actions) => {
    const { data } = await axios.get(`${url}${state}`);
    console.log(data)
    return data;
  }
);
export const editData = createSlice({
  name: "editData",
  initialState: {
    value: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEditData.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(loadEditData.fulfilled, (state, actions) => {
        state.value = actions.payload
        state.loading = false
      });
  },
});

export default editData.reducer;
