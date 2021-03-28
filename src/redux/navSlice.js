import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    page: "home"
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    }
  }
});

export const { changePage } = navSlice.actions;

// Selectors
export const selectPage = state => state.nav.page;

export default navSlice.reducer;
