import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id
      );

      if (!existingItem) {
        return;
      }

      state.totalQuantity -= existingItem.quantity;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.items.find(
        (product) => product.id === id
      );

      if (!item) {
        return;
      }

      if (type === 'increase') {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
      }

      if (type === 'decrease' && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
