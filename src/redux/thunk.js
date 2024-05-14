import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  // currentUserRequest,
  // loginRequest,
  // logoutRequest,
  // logOutRequest,
  registerRequest,
  // setToken,
} from "../service/api";

export const registerThunk = createAsyncThunk(
  "user/registerThunk",
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
