import { FC } from "react";
import { IDeal } from "../../models/Deal";
import classes from "./DealCard.module.css";

interface DealCardProps {
  deal: IDeal;
}

const DealCard: FC<DealCardProps> = ({ deal }) => {
  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${deal.imgPath})` }}
    >
      <section className={classes.block}>
        <div className={classes.title}>{deal.title}</div>
        <div className={classes.context}>
          <div>{deal.sum} Dhs</div>
          <div>Yield {deal.yield} %</div>
          <div>Sold {deal.sold} %</div>
          <div>Tiker {deal.tiket} Dhs</div>
          <div>Days left {deal.daysLeft}</div>
        </div>
      </section>
    </section>
  );
};

export default DealCard;
