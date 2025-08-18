// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "../features/lorem/loremSlice";

export const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});
