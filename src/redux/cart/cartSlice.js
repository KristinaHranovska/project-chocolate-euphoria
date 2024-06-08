import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalQuantity: 0,
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
      state.totalQuantity += quantity;
    },
    deleteProduct(state, action) {
      const productId = action.payload;
      const deletedProduct = state.products.find(product => product.product._id === productId);
      if (deletedProduct) {
        state.totalQuantity -= deletedProduct.quantity;
      }
      state.products = state.products.filter(product => product.product._id !== productId);
    },
    removeAllProducts(state) {
      state.products = [];
      state.totalQuantity = 0;
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(item => item.product._id === productId);
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(item => item.product._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
      }
    }
  },

});

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['products', 'totalQuantity'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const { addProductToCart, deleteProduct, removeAllProducts, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default persistedCartReducer;
