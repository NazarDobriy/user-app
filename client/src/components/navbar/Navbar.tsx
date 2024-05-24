import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";
import { RouteNames } from "@a-router/index";
import { useAppDispatch, useAppSelector } from "@a-hooks/redux";
import { setIsAuth } from "@a-store/reducers/auth/ActionCreators";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const isAuthPage = pathname === RouteNames.LOGIN || pathname === RouteNames.SIGN_UP;

  return (
    <nav
      className={classes.nav}
      style={{ justifyContent: isAuth ? "space-between" : "end" }}
    >
      {isAuth && <div className={classes.title}>Hello, {user?.username}!</div>}

      {!isAuthPage &&
        (isAuth ? (
          <Button clickHandler={() => dispatch(setIsAuth(false))}>
            Sign out
          </Button>
        ) : (
          <section className={classes.btns}>
            <NavLink to={RouteNames.LOGIN}>
              <Button>Login</Button>
            </NavLink>
            <NavLink to={RouteNames.SIGN_UP}>
              <Button isPrimary={false}>Sign Up</Button>
            </NavLink>
          </section>
        ))}
    </nav>
  );
};

export default Navbar;
