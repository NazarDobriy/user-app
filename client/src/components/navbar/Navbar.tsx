import { FC } from "react";
import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { RouteNames } from "../../router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsAuth } from "../../store/reducers/auth/ActionCreators";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const isAuthPage = pathname === RouteNames.LOGIN || pathname === RouteNames.SIGN_UP;

  return (
    <nav className={classes.nav}>
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
