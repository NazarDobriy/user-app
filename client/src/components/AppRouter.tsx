import { FC, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { RouteNames, authRoutes, publicRoutes } from "router/index";
import { useAppSelector } from "hooks/redux";

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return isAuth ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
