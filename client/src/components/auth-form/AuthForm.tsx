import { FC, useEffect, useState } from "react";
import Button from "../UI/button/Button";
import classes from "./AuthForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  createUser,
  loginUser
} from "../../store/reducers/auth/ActionCreators";
import { IUser } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../router";

interface AuthFormProps {
  isLogin: boolean;
}

interface FormData {
  email: string;
  password: string;
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
  const { error, user } = useAppSelector((state) => state.authReducer);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const currentUser: IUser = {
      email: data.email,
      password: data.password
    };

    if (isLogin) {
      dispatch(loginUser(currentUser));
    } else {
      dispatch(createUser(currentUser));
    }
  };

  useEffect(() => {
    if (!isLogin && user) {
      navigate(RouteNames.LOGIN);
      reset();
    }
  }, [isLogin, navigate, reset, user]);

  useEffect(() => {
    reset();
    if (error) {
      setErrorMessage(error);
    }
  }, [reset, error]);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
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

      <Button isPrimary={false} style={{ width: "100%" }}>
        {isLogin ? "Sing In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;
