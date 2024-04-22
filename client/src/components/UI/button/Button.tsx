import { CSSProperties, FC, ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  style?: CSSProperties;
  clickHandler?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  clickHandler,
  isPrimary = true
}) => {
  const buttonClass = isPrimary ? classes.primary : classes["not-primary"];

  return (
    <button
      className={`${classes.btn} ${buttonClass}`}
      style={style}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
