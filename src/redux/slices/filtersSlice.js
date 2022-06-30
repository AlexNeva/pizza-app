import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популяности",
    sortType: "rating",
  },
  pagination: {
    pagesCount: 0,
    currentPage: 1,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPagesCount(state, action) {
      state.pagination.pagesCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.pagination.currentPage = action.payload + 1;
    },
  },
});

export const { setCategoryId, setSort, setPagesCount, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
