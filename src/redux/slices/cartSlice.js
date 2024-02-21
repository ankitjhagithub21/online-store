import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem('cart', JSON.stringify(cartData));
};

export const loadCartFromLocalStorage = () => {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  return cartData;
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        toast.success('Product added');
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
        toast.success('Product added');
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success('Product removed');
      saveCartToLocalStorage(state.cart);
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      saveCartToLocalStorage(state.cart);
    },
    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state.cart);
    },
    orderNow: (state) => {
      localStorage.removeItem('cart');
      state.cart = [];
      toast.success("Order successfull.")
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, orderNow } = cartSlice.actions;

export default cartSlice.reducer;
