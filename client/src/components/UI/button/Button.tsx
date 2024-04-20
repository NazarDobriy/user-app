import { FC, ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isPrimary = true }) => {
  const buttonClass = isPrimary ? classes.primary : classes.notPrimary;

  return (
    <button className={`${classes.btn} ${buttonClass}`}>
      {children}
    </button>
  );
};

export default Button;
