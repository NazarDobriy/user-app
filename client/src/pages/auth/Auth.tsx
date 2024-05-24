import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import classes from "./Auth.module.css";
import authPicture from "@a-assets/auth.png";
import { RouteNames } from "@a-router/index";
import AuthForm from "@a-components/auth-form/AuthForm";

const Auth: FC = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === RouteNames.LOGIN;

  return (
    <section className={classes.container}>
      <img src={authPicture} alt="City" className={classes.img} />
      <div className={classes.form}>
        <div className={classes["form-container"]}>
          <h3 className={classes.title}>{isLogin ? "Login" : "Sign Up"}</h3>
          <AuthForm isLogin={isLogin}></AuthForm>
          <h5 className={classes.question}>
            {isLogin ? (
              <section>
                Don't have an account?{" "}
                <NavLink to={RouteNames.SIGN_UP}>
                  <span className={classes.hint}>Sign Up</span>
                </NavLink>
              </section>
            ) : (
              <section>
                Have you already created account?{" "}
                <NavLink to={RouteNames.LOGIN}>
                  <span className={classes.hint}>Sing In</span>
                </NavLink>
              </section>
            )}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Auth;
