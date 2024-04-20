import { ComponentType } from "react";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";

export interface IRoute {
  path: string;
  component: ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  HOME = "/",
  DEALS = "/deals"
}

export const authRoutes: IRoute[] = [];

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: Home
  },
  {
    path: RouteNames.LOGIN,
    component: Auth
  },
  {
    path: RouteNames.SIGN_UP,
    component: Auth
  }
];
