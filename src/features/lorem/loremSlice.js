// src/features/lorem/loremSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = loremSlice.actions;
export default loremSlice.reducer;
