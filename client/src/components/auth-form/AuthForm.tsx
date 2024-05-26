import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import classes from "./AuthForm.module.css";
import Button from "components/UI/button/Button";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  clearUser,
  loginUser,
  registerUser
} from "store/reducers/auth/ActionCreators";
import { IUser } from "models/User";
import { RouteNames } from "router/index";
import useErrorMessage from "hooks/error";

interface AuthFormProps {
  isLogin: boolean;
}

interface FormData {
  email: string;
  password: string;
  username?: string;
}

const AuthForm: FC<AuthFormProps> = ({ isLogin = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, user, isLoading } = useAppSelector(
    (state) => state.authReducer
  );
  const { setError } = useErrorMessage(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let currentUser: IUser = {
      user: {
        email: data.email,
        password: data.password
      }
    };

    if (data.username) {
      currentUser = {
        ...currentUser,
        user: {
          ...currentUser.user,
          username: data.username
        }
      };
    }

    if (isLogin) {
      dispatch(loginUser(currentUser));
    } else {
      dispatch(registerUser(currentUser));
    }
  };

  useEffect(() => {
    if (!isLogin && user) {
      navigate(RouteNames.LOGIN);
    }

    if (!isLogin) {
      dispatch(clearUser());
    }

    reset();
  }, [isLogin, navigate, reset, user, dispatch]);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      {!isLogin && (
        <label className={classes["w-full"]}>
          <h4 className={classes.title}>Username</h4>
          <input
            className={classes.input}
            type="text"
            placeholder="Username"
            style={errors.username && { borderColor: "red" }}
            {...register("username", {
              required: true,
              minLength: 5
            })}
          />
          <div className={classes.warn}>
            {errors.username &&
              errors.username.type === "required" &&
              "Username is required"}
            {errors.username &&
              errors.username.type === "minLength" &&
              "Min length is 5"}
          </div>
        </label>
      )}

      <label className={classes["w-full"]}>
        <h4 className={classes.title}>Email</h4>
        <input
          className={classes.input}
          type="email"
          placeholder="Email"
          style={errors.email && { borderColor: "red" }}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address"
            }
          })}
        />
        <div className={classes.warn}>
          {errors.email &&
            errors.email.type === "required" &&
            "Email is required"}
          {errors.email &&
            errors.email.type === "pattern" &&
            "Invalid email format"}
        </div>
      </label>

      <label className={classes["w-full"]}>
        <h4 className={classes.title}>Password</h4>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          style={errors.password && { borderColor: "red" }}
          {...register("password", {
            required: true,
            minLength: 3
          })}
        />
        <div className={classes.warn}>
          {errors.password &&
            errors.password.type === "required" &&
            "Password is required"}
          {errors.password &&
            errors.password.type === "minLength" &&
            "Min length is 3"}
        </div>
      </label>

      <Button isPrimary={false} isLoading={isLoading} style={{ width: "100%" }}>
        {isLogin ? "Sing In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;
