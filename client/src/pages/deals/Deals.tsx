import { FC, useEffect } from "react";

import classes from "./Deals.module.css";
import useErrorMessage from "hooks/error";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { getDeals } from "store/reducers/deal/ActionCreators";
import DealCard from "components/deal-card/DealCard";

const Deals: FC = () => {
  const dispatch = useAppDispatch();
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
    <main>
      <h3 className={classes.subtitle}>Open Deals</h3>
      <div className={classes.deals}>
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal}></DealCard>
        ))}
      </div>
    </main>
  );
};

export default Deals;
