import { CSSProperties, FC, ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, style, isPrimary = true }) => {
  const buttonClass = isPrimary ? classes.primary : classes["not-primary"];

  return (
    <button className={`${classes.btn} ${buttonClass}`} style={style}>
      {children}
    </button>
  );
};

export default Button;
