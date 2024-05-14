import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./thunk";
const initialState = {
  isSubmit: false,
  username: " ",
  email: " ",
  token: null,
  isLogin: false,
  error: null,
  accessToken: null,
  refreshToken: null,
  isOpen: false,
};

const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    setSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLogin = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.username = action.payload.username;
        state.email = action.payload.email;
        // state.token = action.payload.token;
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        console.log(action.payload);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLogin = false;

        // state.error = action.payload;
      });
    // .addCase(requestPeriodData.pending, (state) => {
    //   state.error = null;
    //   state.isLoading = true;
    // })
    // .addCase(requestPeriodData.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.isLoading = false;
    //   state.periodInfo = action.payload;
    // })
    // .addCase(requestPeriodData.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});
export const { setSubmit } = periodSlice.actions;
export const periodInfoReducer = periodSlice.reducer;
