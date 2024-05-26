import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";
import { RouteNames } from "router/index";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setIsAuth } from "store/reducers/auth/ActionCreators";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const isDealsPage = pathname === RouteNames.DEALS;
  const isAuthPage = pathname === RouteNames.LOGIN || pathname === RouteNames.SIGN_UP;

  return (
    <nav
      className={classes.nav}
      style={{ justifyContent: isAuth ? "space-between" : "end" }}
    >
      {isAuth && <div className={classes.title}>Hello, {user?.user.username}!</div>}

      {!isAuthPage &&
        (isAuth ? (
          <section className={classes.btns}>
            {isDealsPage ? (
              <NavLink to={RouteNames.HOME}>
              <Button>Home</Button>
            </NavLink>
            ) : (
              <NavLink to={RouteNames.DEALS}>
                <Button>Deals</Button>
              </NavLink>
            )}
            <Button
              isPrimary={false}
              clickHandler={() => dispatch(setIsAuth(false))}
            >
              Sign out
            </Button>
          </section>
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
