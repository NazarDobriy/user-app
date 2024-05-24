import { AxiosError } from "axios";

import { authSlice } from "./AuthSlice";
import { $host } from "@a-http/index";
import { IUser } from "@a-models/User";
import { AppDispatch } from "@a-store/store";

const USER_API_PATH = "api/user";

export const setIsAuth = (isAuth: boolean) => (dispatch: AppDispatch) => {
  if (!isAuth) {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
  }

  dispatch(authSlice.actions.setIsAuth(isAuth));
};

export const createUser = (user: IUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.createUser());
    const response = await $host.post<IUser>(USER_API_PATH, {
      method: "POST",
      ...user
    });
    dispatch(authSlice.actions.createUserSuccess(response.data));
  } catch (error) {
    dispatch(
      authSlice.actions.createUserFailure(
        error instanceof AxiosError
          ? error.response?.data.message
          : "Create user error"
      )
    );
  }
};

export const loginUser = (user: IUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.loginUser());
    const response = await $host.post<IUser>(`${USER_API_PATH}/login`, {
      method: "POST",
      ...user
    });
    dispatch(authSlice.actions.loginUserSuccess(response.data));
    
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify(response.data));

  } catch (error) {
    dispatch(
      authSlice.actions.loginUserFailure(
        error instanceof AxiosError
          ? error.response?.data.message
          : "Login user error"
      )
    );
  }
};

export const clearUser = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.clearUser());
}

export const setUser = (user: IUser) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.setUser(user));
}
