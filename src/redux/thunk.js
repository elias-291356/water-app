import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  // currentUserRequest,
  loginRequest,
  logoutRequest,
  // logOutRequest,
  registerRequest,
  setToken,
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
export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (formData, thunkAPI) => {
    try {
      const data = await loginRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "user/logoutThunk",
  async (_, thunkAPI) => {
    try {
      await logoutRequest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//---------------refreshUserThunk------------------//
export const refreshUserThunk = createAsyncThunk(
  "user/refreshUserThunk",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
      setToken(token);
      const data = await currentUserRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
