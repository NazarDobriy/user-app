import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, authRoutes, publicRoutes } from "../router";
import { useAppSelector } from "../hooks/redux";

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return isAuth ? (
    <Routes>
      {authRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  );
};

export default AppRouter;
