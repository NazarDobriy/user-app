import { FC, useEffect } from "react";
import Button from "../UI/button/Button";
import classes from "./AuthForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Email submitted:", data);
  };

  useEffect(() => {
    reset();
  }, [isLogin, reset]);

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
