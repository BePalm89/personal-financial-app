import React from "react";
import "./Login.scss";
import { useTheme } from "@emotion/react";
import { Text } from "@chakra-ui/react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

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
        <div>
          <Text
            fontSize="h1"
            color="white"
            fontWeight="bold"
            lineHeight="shorter"
          >
            Keep track of your money and save for your future
          </Text>
          <Text
            fontSize="h4"
            color="white"
            fontWeight="regular"
            lineHeight="base"
            marginTop="300"
          >
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </Text>
        </div>
      </div>
      <div className="form-container">
        <div
          className="login-form-container"
          style={{ backgroundColor: "white", padding: theme.space[400] }}
        >
          <Text
            fontSize="h1"
            fontWeight="bold"
            lineHeight="shorter"
            marginBottom={theme.space[400]}
          >
            Login
          </Text>
          <form noValidate>
            <InputComponent
              name="email"
              label="Email"
              type="email"
              register={register}
              isRequired={true}
            ></InputComponent>
            <InputComponent
              name="password"
              label="Password"
              type="password"
              register={register}
              isRequired={true}
              icon="eye"
            ></InputComponent>
            <ButtonComponent
              label="Login"
              onClick={() => console.log("clicked")}
            ></ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  );
};
