import { FC } from "react";
import classes from "./Navbar.module.css";
import Button from "../UI/button/Button";

const Navbar: FC = () => {
  return (
    <nav className={classes.nav}>
      <section className={classes.btns}>
        <Button>Login</Button>
        <Button isPrimary={false}>Sign Up</Button>
      </section>
    </nav>
  );
};

export default Navbar;
