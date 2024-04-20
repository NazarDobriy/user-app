import { FC } from "react";
import authPicture from "../../assets/auth.png";
import classes from "./Auth.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { RouteNames } from "../../router";
import AuthForm from "../../components/auth-form/AuthForm";

const Auth: FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === RouteNames.LOGIN;

  return (
    <section className={classes.container}>
      <img src={authPicture} alt="City" width="60%" />
      <div className={classes.form}>
        <div className={classes["form-container"]}>
          <h3 className={classes.title}>{isLogin ? "Login" : "Sign Up"}</h3>
          <AuthForm isLogin={isLogin}></AuthForm>
          {isLogin && (
            <h5 className={classes.question}>
              Don't have account?
              <NavLink to={RouteNames.SIGN_UP}>
                <span className={classes.hint}>Sing Up</span>
              </NavLink>
            </h5>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
