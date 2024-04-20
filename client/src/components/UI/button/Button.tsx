import { FC, ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  clickHandler?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  clickHandler,
  isPrimary = true
}) => {
  const buttonClass = isPrimary ? classes.primary : classes.notPrimary;

  return (
    <button className={`${classes.btn} ${buttonClass}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
