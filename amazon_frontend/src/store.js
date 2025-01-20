import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
