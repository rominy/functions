import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNumber: 0
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    currentShow: (state, action) => {
      state.show = action.payload;
    }
  }
});

export const { currentShow } = showSlice.actions;

export const selectShow = state => state.show.showNumber;

export default showSlice.reducer;