import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'http://localhost:8000/api'
const endPoint = "/categories/";
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async(state, actions)=>{
    const { data } = await axios.get(`${url}${state}`);
    return data
})

export const Data = createSlice({
  name: "data",
  initialState: { value: 0 },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, actions)=>{
        state.value = []
    }).addCase(fetchTodos.fulfilled, (state,actions)=>{
        state.value = actions.payload
    })
  }
});


export default Data.reducer;
