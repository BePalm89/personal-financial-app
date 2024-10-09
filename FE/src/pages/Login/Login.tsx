import React from "react";
import "./Login.scss";
import { useTheme } from "@emotion/react";
import { Text } from "@chakra-ui/react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { TextComponent } from "../../components/TextComponent/TextComponent";

export interface FormData {
  email: string;
  password: string;
}
export const Login: React.FC = () => {
  const theme = useTheme();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    resetField,
  } = useForm<FormData>({ mode: "all" });

  return (
    <div className="login-container">
      <div
        className="login-img-container"
        style={{
          padding: theme.space[500],
        }}
      >
        <div>
          <img src="/img/logo-large.svg" alt="logo img" />
        </div>
        <div className="text-container">
          <TextComponent
            text="Keep track of your money and save for your future"
            variant="heading1"
            color="white"
          />
          <TextComponent
            text="Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily."
            variant="heading4Reg"
            color="white"
          />
        </div>
      </div>
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
              onClick={() => console.log("clicked")}
            ></ButtonComponent>
          </form>
          <div className="help-text">
            <TextComponent
              text="Need to create an account?"
              variant="heading4Reg"
              color="grey.500"
              link="Sign up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
