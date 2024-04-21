import { AxiosError } from "axios";
import { $host } from "../../../http";
import { IUser } from "../../../models/User";
import { AppDispatch } from "../../store";
import { authSlice } from "./AuthSlice";

const USER_API_PATH = "api/user";

export const setIsAuth = (isAuth: boolean) => (dispatch: AppDispatch) => {
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
