import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./thunk";
const initialState = {
  email: " ",
  token: null,
  isLogin: false,
  error: null,
  isLoading: false,
  myWaterNorma: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
    setMyWaterNorma: (state, action) => {
      state.myWaterNorma = action.payload;
    },
    setClearMyWaterNorma: (state) => {
      state.myWaterNorma = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //=====================REGISTER
      .addCase(registerThunk.pending, (state) => {
        state.error = null;
        state.isLogin = false;
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.isLogin = true;
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLogin = false;

        state.error = action.payload;
      })
      //=====================LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.isLogin = false;
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //=====================LOGOUT
      .addCase(logoutThunk.pending, (state) => {
        state.isLogin = false;
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLogin = false;
        state.isLoading = false;
        state.token = null;
        console.log(action.payload);
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setSubmit, setMyWaterNorma, setClearMyWaterNorma } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
