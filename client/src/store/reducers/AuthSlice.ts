import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    changeAuth(state) {
      state.isAuth = !state.isAuth;
    }
  }
});

export default authSlice.reducer;
