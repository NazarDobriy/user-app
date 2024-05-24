import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";
import Button from "components/UI/button/Button";
import { RouteNames } from "router/index";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { getDeals } from "store/reducers/deal/ActionCreators";
import DealCard from "components/deal-card/DealCard";
import useErrorMessage from "hooks/error";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { deals, error } = useAppSelector((state) => state.dealReducer);
  const { setError } = useErrorMessage(null);

  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  return (
    <section>
      <div className={classes.container}>
        <h1 className={classes.title}>The chemical negatively charged</h1>
        <h2 className={classes.description}>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is
        </h2>
        {!isAuth && (
          <NavLink to={RouteNames.LOGIN}>
            <Button>Get Started</Button>
          </NavLink>
        )}
      </div>

      <h3 className={classes.subtitle}>Open Deals</h3>
      <div className={classes.deals}>
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal}></DealCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
