import { ComponentType, lazy } from "react";

const HomePage = lazy(() => import('pages/home/Home'));
const AuthPage = lazy(() => import('pages/auth/Auth'));

export interface IRoute {
  path: string;
  component: ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  HOME = "/"
}

export const authRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: HomePage
  }
];

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: HomePage
  },
  {
    path: RouteNames.LOGIN,
    component: AuthPage
  },
  {
    path: RouteNames.SIGN_UP,
    component: AuthPage
  }
];
