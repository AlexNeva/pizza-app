import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      state.items.push(item);

      state.totalPrice = state.items.reduce((sum, item) => item.price + sum, 0);
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
