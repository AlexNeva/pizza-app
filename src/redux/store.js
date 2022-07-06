import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filtersSlice";
import items from "./slices/itemsSlice";

export const store = configureStore({
  reducer: {
    filter,
    items,
  },
});
