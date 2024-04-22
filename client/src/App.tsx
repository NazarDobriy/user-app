import { FC, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { setIsAuth, setUser } from "./store/reducers/auth/ActionCreators";

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
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
