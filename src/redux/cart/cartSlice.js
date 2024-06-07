import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(item => item.product._id === product._id);

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += quantity;
      } else {
        state.products.push({ product, quantity });
      }
    },
  },

});

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const { addProductToCart } = cartSlice.actions;
export default persistedCartReducer;
