import { FC, useEffect } from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "components/navbar/Navbar";
import AppRouter from "components/AppRouter";
import { useAppDispatch } from "hooks/redux";
import { setIsAuth, setUser } from "store/reducers/auth/ActionCreators";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    const user = localStorage.getItem("user");

    if (isAuth === "true") {
      dispatch(setIsAuth(true));
    }

    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
    </HashRouter>
  );
};

export default App;
