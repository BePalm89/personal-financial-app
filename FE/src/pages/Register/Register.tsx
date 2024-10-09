import React from "react";
import { useTheme } from "@emotion/react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { TextComponent } from "../../components/TextComponent/TextComponent";
import { withAuthForm } from "../../components/WithAuthForm/WithAuthForm";
import { HeroBoxDesktop } from "../../components/HeroBoxDesktop/HeroBoxDesktop";
import "./Register.scss";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ResponsiveComponent } from "../../components/ResponsiveComponent/ResponsiveComponent";
import { HeroBoxMobile } from "../../components/HeroBoxMobile/HeroBoxMobile";
interface RegisterProps {
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<any>;
  errors: { [key: string]: FieldError };
  isValid: boolean;
  setLoggedIn: (value: boolean) => void;
}

const RegisterComponent: React.FC<RegisterProps> = ({
  handleSubmit,
  register,
  errors,
  isValid,
}) => {
  const theme = useTheme();

  return (
    <div className="register-container">
      <ResponsiveComponent>
        {({ size }) => (size === "lg" ? <HeroBoxDesktop /> : <HeroBoxMobile />)}
      </ResponsiveComponent>
      <div className="form-container">
        <div
          className="register-form-container"
          style={{ backgroundColor: "white", padding: theme.space[400] }}
        >
          <TextComponent text="Register" variant="heading1" />
          <form
            noValidate
            style={{
              marginTop: theme.space[400],
              marginBottom: theme.space[400],
            }}
            onSubmit={handleSubmit}
          >
            <InputComponent
              name="username"
              label="Name"
              type="text"
              register={register}
              isRequired={true}
              errors={errors.username}
            />
            <InputComponent
              name="email"
              label="Email"
              type="email"
              register={register}
              isRequired={true}
              errors={errors.email}
            />
            <InputComponent
              name="password"
              label="Create password"
              type="password"
              register={register}
              isRequired={true}
              errors={errors.password}
              helperText="Password must be at least 8 characters"
            />
            <ButtonComponent
              type="submit"
              label="Create Account"
              onClick={() => {}}
              disabled={!isValid}
            />
          </form>
          <div className="help-text">
            <TextComponent
              text="Already have an account?"
              variant="heading4Reg"
              color="grey.500"
              link="Login"
              linkUrl="/login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = withAuthForm(RegisterComponent, {
  onSubmitUrl: "http://localhost:3000/api/v1/users/register",
});
export default Register;
