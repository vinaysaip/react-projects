import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (itemIndex != -1) {
        state.items.splice(itemIndex, 1);
      }
    },
  },
});
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
