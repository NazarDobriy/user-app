import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

import { authSlice } from "./AuthSlice";
import { $host } from "http/index";
import { IUser } from "models/User";
import { AppDispatch } from "store/store";

const USER_AUTH_PATH = "api/auth";

export const setIsAuth = (isAuth: boolean) => (dispatch: AppDispatch) => {
  if (!isAuth) {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  dispatch(authSlice.actions.setIsAuth(isAuth));
};

export const registerUser = (user: IUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.registerUser());
    const { data } = await $host.post<{ token: string }>(
      `${USER_AUTH_PATH}/register`,
      {
        method: "POST",
        ...user
      }
    );

    const token = data.token;
    const decodedToken = jwtDecode<{ user: IUser }>(token);

    localStorage.setItem("token", token);
    dispatch(authSlice.actions.registerUserSuccess(decodedToken.user));
  } catch (error) {
    dispatch(
      authSlice.actions.registerUserFailure(
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
    const { data } = await $host.post<{ token: string }>(
      `${USER_AUTH_PATH}/login`,
      {
        method: "POST",
        ...user
      }
    );

    const token = data.token;
    const decodedToken = jwtDecode<{ user: IUser }>(token);

    localStorage.setItem("token", token);
    dispatch(authSlice.actions.loginUserSuccess(decodedToken.user));

    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify(decodedToken.user));
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
};

export const setUser = (user: IUser) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.setUser(user));
};
