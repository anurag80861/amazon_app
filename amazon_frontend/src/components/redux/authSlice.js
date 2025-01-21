import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth', 
  initialState: {
    // isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    signIn: (state, action) => {
      // state.isAuthenticated = true;
      const { email } = action.payload;
      state.user = email;
    },
    signOut: (state) => {
      // state.isAuthenticated = false;
      state.user = null;  
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signIn, signOut, setError } = authSlice.actions;
export default authSlice.reducer;
