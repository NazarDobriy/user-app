import { FC } from "react";
import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../router";

const Navbar: FC = () => {
  return (
    <nav className={classes.nav}>
      <section className={classes.btns}>
        <NavLink to={RouteNames.LOGIN}>
          <Button>Login</Button>
        </NavLink>
        <NavLink to={RouteNames.SIGN_UP}>
          <Button isPrimary={false}>Sign Up</Button>
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
