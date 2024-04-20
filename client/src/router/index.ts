import { ComponentType } from "react";
import Home from "../pages/home/Home";

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
  }
];
