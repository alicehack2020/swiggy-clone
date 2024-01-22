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
      }
    },
    clearCart: (state) => {
      if (state.items.length !== 0) {
        state.items.length = 0;
      }
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
