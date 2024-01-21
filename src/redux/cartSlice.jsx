import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //TODO: check item is already preset
      if (
        state.items.length > 0 &&
        state.items.find((data) => data.id !== action.payload.id)
      ) {
        state.items.push(action.payload);
      } else if (state.items.length === 0) {
        state.items.push(action.payload);
      } else {
        alert("already added");
      }
    },
    removeItem: (state, action) => {
      //TODO: add fiter code
      if (
        state.items.length !== 0 &&
        state.items.find((data) => data.id === action.payload.id)
      ) {
        state.items = state.items.filter(
          (data) => data.id !== action.payload.id
        );
        alert("removed Food");
      }
    },
    clearCart: (state) => {
      if (state.items.length !== 0) {
        state.items.length = 0;
        alert("all food removed from cart");
      }
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
