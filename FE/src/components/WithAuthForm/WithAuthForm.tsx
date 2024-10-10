import React, { useState } from "react";
import { FieldError, UseFormRegister, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { AlertComponent } from "../AlertComponent/AlertComponent";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  username?: string;
}

interface ErrorResponse {
  message: string;
}

interface AuthFormConfig {
  onSubmitUrl: string;
}

interface WrappedComponentProps {
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<any>;
  errors: { [key: string]: FieldError };
  isValid: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const withAuthForm = (
  WrappedComponent: React.ComponentType<WrappedComponentProps>,
  config: AuthFormConfig
) => {
  return (
    props: Omit<
      WrappedComponentProps,
      "handleSubmit" | "register" | "errors" | "isValid"
    >
  ) => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState<{
      status: "error" | "info" | "success" | "warning";
      title: string;
      message: string;
    } | null>(null);

    const {
      handleSubmit,
      register,
      formState: { errors, isValid },
    } = useForm<FormData>({ mode: "all" });

    const onSubmit = async (data: FormData) => {
      try {
        await axios.post(config.onSubmitUrl, data);
        navigate("/overview");
        props.setLoggedIn(true);
      } catch (error) {
        const axiosError = error as AxiosError;
        const errorResponse = axiosError.response?.data as ErrorResponse;
        setAlert({
          status: "error",
          title: "Error",
          message: errorResponse.message,
        });
      }
    };

    const handleAlertClose = () => {
      setAlert(null);
    };

    return (
      <>
        {alert && (
          <AlertComponent
            status={alert.status}
            title={alert.title}
            message={alert.message}
            onClose={handleAlertClose}
          />
        )}
        <WrappedComponent
          {...props}
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          isValid={isValid}
        />
      </>
    );
  };
};
