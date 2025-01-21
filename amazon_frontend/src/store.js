import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/redux/authSlice';
import cartReducer from './components/redux/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,  
  },
});
