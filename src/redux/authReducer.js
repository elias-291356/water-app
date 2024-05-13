import { createSlice } from "@reduxjs/toolkit";
// import { requestPeriodData } from "./thunks";

const initialState = {
  isLoading: false,
  error: null,
  isSubmit: false,
};

const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    setSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(requestPeriodData.pending, (state) => {
  //       state.error = null;
  //       state.isLoading = true;
  //     })
  //     .addCase(requestPeriodData.fulfilled, (state, action) => {
  //       state.error = null;
  //       state.isLoading = false;
  //       state.periodInfo = action.payload;
  //     })
  //     .addCase(requestPeriodData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});
export const { setSubmit } = periodSlice.actions;
export const periodInfoReducer = periodSlice.reducer;
