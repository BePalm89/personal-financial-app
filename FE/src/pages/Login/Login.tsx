import React, { useState } from "react";
import "./Login.scss";
import { useTheme } from "@emotion/react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { TextComponent } from "../../components/TextComponent/TextComponent";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";

interface ErrorResponse {
  message: string;
}
interface LoginProps {
  setLoggedIn: (value: boolean) => void;
}
export interface FormData {
  email: string;
  password: string;
}
export const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const [alert, setAlert] = useState<{ status: "error" | "info" | "success" | "warning", title: string, message: string} | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = async (data: FormData,  event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/login", data);
      setLoggedIn(true);
      navigate("/home");
      console.log(response);
    } catch (error ) {
      const axiosError = error as AxiosError;
      const errorResponse = axiosError.response?.data as ErrorResponse;

      setAlert({
        status: 'error',
        title: 'Error',
        message: errorResponse.message
      })
    }
  };

  const handleAlertClose = () => {
    setAlert(null);
  }

  return (
    <div className="login-container">
      { alert && (
        <AlertComponent status={alert.status} title={alert.title} message={alert.message} onClose={handleAlertClose}/>
      )}
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
            onSubmit={handleSubmit(onSubmit)}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};
