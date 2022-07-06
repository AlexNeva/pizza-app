import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { itemsAPI } from "../../API/services/itemsService";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

// create thunk

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        categoryId,
        pagination: { currentPage },
        searchValue,
        sort: { sortType, order },
      } = getState().filter;

      const response = await itemsAPI.getItems(
        searchValue,
        categoryId,
        sortType,
        order,
        currentPage
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default itemsSlice.reducer;
