import { FC } from "react";
import classes from "./Home.module.css";
import Button from "../../components/UI/button/Button";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../router";

const Home: FC = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>The chemical negatively charged</h1>
      <h2 className={classes.description}>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. While the mass defect is
      </h2>
      <NavLink to={RouteNames.LOGIN}>
        <Button>Get Started</Button>
      </NavLink>
    </section>
  );
};

export default Home;
