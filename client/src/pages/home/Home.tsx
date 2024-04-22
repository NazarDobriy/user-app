import { FC, useEffect, useState } from "react";
import classes from "./Home.module.css";
import Button from "../../components/UI/button/Button";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getDeals } from "../../store/reducers/deal/ActionCreators";
import DealCard from "../../components/deal-card/DealCard";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { deals, error } = useAppSelector((state) => state.dealReducer);

  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

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
