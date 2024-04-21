import { FC } from "react";
import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { RouteNames } from "../../router";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === RouteNames.LOGIN || pathname === RouteNames.SIGN_UP;

  return (
    <nav className={classes.nav}>
      {!isAuthPage && (
        <section className={classes.btns}>
          <NavLink to={RouteNames.LOGIN}>
            <Button>Login</Button>
          </NavLink>
          <NavLink to={RouteNames.SIGN_UP}>
            <Button isPrimary={false}>Sign Up</Button>
          </NavLink>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
