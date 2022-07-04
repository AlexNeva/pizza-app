import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortType: "rating",
    order: "asc",
  },
  pagination: {
    pagesCount: 0,
    currentPage: 1,
  },
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
      state.pagination.currentPage = 1;
    },
    setSort(state, action) {
      console.log(action.payload);

      state.sort = action.payload;
      state.pagination.currentPage = 1;
    },
    setPagesCount(state, action) {
      state.pagination.pagesCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.pagination.currentPage = action.payload + 1;
    },
    setSearch(state, action) {
      state.searchValue = action.payload;
      state.pagination.currentPage = 1;
    },
    setFilters(state, action) {
      const { category, sortBy, order, page, title } = action.payload;
      state.categoryId = +category || initialState.categoryId;
      state.sort.sortType = sortBy || initialState.sort.sortType;
      state.sort.order = order || initialState.sort.order;
      state.pagination.currentPage =
        +page || initialState.pagination.currentPage;
      state.searchValue = title || initialState.searchValue;
    },
    resetFilters(state, action) {
      state.categoryId = initialState.categoryId;
      state.sort = initialState.sort;
      state.pagination = initialState.pagination;
      state.searchValue = initialState.searchValue;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setPagesCount,
  setCurrentPage,
  setSearch,
  setFilters,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
