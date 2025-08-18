// src/features/lorem/loremActions.js
import axios from "axios";
import { fetchStart, fetchSuccess, fetchError } from "./loremSlice";

export const fetchLoremData = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const response = await axios.get("https://api.lorem.com/ipsum");
      dispatch(fetchSuccess(response.data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
