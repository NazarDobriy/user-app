import { CSSProperties, FC, ReactNode } from "react";

import classes from "./Button.module.css";
import Loader from "../loader/Loader";

interface ButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  style?: CSSProperties;
  clickHandler?: () => void;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  clickHandler,
  isPrimary = true,
  isLoading = false
}) => {
  const buttonClass = isPrimary ? classes.primary : classes["not-primary"];

  return (
    <button
      className={`${classes.btn} ${buttonClass}`}
      style={style}
      disabled={isLoading}
      onClick={clickHandler}
    >
      <section className={classes.content}>
        {isLoading && <Loader />}
        {children}
      </section>
    </button>
  );
};

export default Button;
