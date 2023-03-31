import {createSlice} from "@reduxjs/toolkit";
import {flowers} from "@/db/flowers";

const initialState = {
  loading: "idle",
  data: flowers,
  error: null,
};

export const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
  },
})
;

export const {
} = flowersSlice.actions;

export default flowersSlice.reducer;
