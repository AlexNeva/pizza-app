import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagesCount: 0,
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagesCount(state, action) {
      state.pagesCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload + 1;
    },
  },
});

export const { setCurrentPage, setPagesCount } = paginationSlice.actions;

export default paginationSlice.reducer;
