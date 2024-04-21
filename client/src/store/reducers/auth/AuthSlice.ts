import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

interface AuthState {
  isAuth: boolean;
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  isLoading: false,
  error: null
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    createUser(state) {
      state.isLoading = true;
      state.error = null;
    },
    createUserSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    createUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginUser(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginUserSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default authSlice.reducer;
