import React from "react";
import "./Login.scss";
import { useTheme } from "@emotion/react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { TextComponent } from "../../components/TextComponent/TextComponent";

import { withAuthForm } from "../../components/WithAuthForm/WithAuthForm";
import { HeroBoxDesktop } from "../../components/HeroBoxDesktop/HeroBoxDesktop";
import { FieldError, UseFormRegister } from "react-hook-form";

interface LoginProps {
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  register:UseFormRegister<any>;
  errors: { [key: string]: FieldError }
  isValid: boolean;
  setLoggedIn: (value: boolean) => void;
}
const LoginComponent: React.FC<LoginProps> = ({
  handleSubmit,
  register,
  errors,
  isValid,
}) => {
  const theme = useTheme();

  return (
    <div className="login-container">
      <HeroBoxDesktop />
      <div className="form-container">
        <div
          className="login-form-container"
          style={{ backgroundColor: "white", padding: theme.space[400] }}
        >
          <TextComponent text="Login" variant="heading1" />
          <form
            noValidate
            style={{
              marginTop: theme.space[400],
              marginBottom: theme.space[400],
            }}
            onSubmit={handleSubmit}
          >
            <InputComponent
              name="email"
              label="Email"
              type="email"
              register={register}
              isRequired={true}
              errors={errors.email}
            ></InputComponent>
            <InputComponent
              name="password"
              label="Password"
              type="password"
              register={register}
              isRequired={true}
              errors={errors.password}
            ></InputComponent>
            <ButtonComponent
              label="Login"
              type="submit"
              onClick={() => {}}
              disabled={!isValid}
            ></ButtonComponent>
          </form>
          <div className="help-text">
            <TextComponent
              text="Need to create an account?"
              variant="heading4Reg"
              color="grey.500"
              link="Sign up"
              linkUrl="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Login = withAuthForm(LoginComponent, {
  onSubmitUrl: "http://localhost:3000/api/v1/users/login",
});
export default Login;
