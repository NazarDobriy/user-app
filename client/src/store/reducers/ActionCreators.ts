import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";

export const changeAuth = () => (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.changeAuth());
};
