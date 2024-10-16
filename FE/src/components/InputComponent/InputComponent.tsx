import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
interface InputComponentProps {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  isRequired: boolean;
  helperText?: string;
  placeholder?: string;
  errors?: FieldError;
  icon?: string;
  prefix?: string;
  colorTag?: string;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  name,
  type,
  register,
  isRequired,
  label,
  helperText,
  placeholder,
  errors,
  icon,
  prefix,
  colorTag,
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const requiredErrorMessage = "This field is required";

  const getValidationRules = () => {
    switch (type) {
      case "email":
        return {
          required: isRequired ? requiredErrorMessage : false,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
        };
      case "password":
        return {
          required: isRequired ? requiredErrorMessage : false,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          validate: {
            containsNumber: (value: string) =>
              /[0-9]/.test(value) ||
              "Password must contain at least one number",
            containsUppercase: (value: string) =>
              /[A-Z]/.test(value) ||
              "Password must contain at least one uppercase letter",
            containsSpecialChar: (value: string) =>
              /[!@#$%^&*]/.test(value) ||
              "Password must contain at least one special character",
          },
        };

      default:
        return {
          required: isRequired ? requiredErrorMessage : false,
        };
    }
  };

  return (
    <Box marginBottom={200}>
      <FormControl id={name} isRequired={isRequired} isInvalid={!!errors}>
        <FormLabel>{label}</FormLabel>
        {type === "password" ? (
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder={placeholder}
              {...register(name, getValidationRules())}
            />
            <InputRightElement>
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick();
                  }
                }}
                aria-label={show ? "Hide password" : "Show password"}
                variant="ghost"
                _hover={{ background: "none" }}
              >
                <img
                  src={show ? "/img/eye.svg" : "/img/hide.svg"}
                  alt={show ? "Show password" : "Hide password"}
                />
              </Button>
            </InputRightElement>
          </InputGroup>
        ) : (
          <InputGroup>
            {prefix && <InputLeftElement>{prefix}</InputLeftElement>}
            {colorTag && <InputLeftElement>{colorTag}</InputLeftElement>}

            <Input
              type={type}
              id={name}
              placeholder={placeholder}
              {...register(name, getValidationRules())}
            ></Input>

            {icon && (
              <InputRightElement>
                <img src={`/img/${icon}.svg`} alt={`${icon}`} />
              </InputRightElement>
            )}
          </InputGroup>
        )}

        {helperText && (
          <FormHelperText textAlign="right">{helperText}</FormHelperText>
        )}
        {errors && <FormErrorMessage>{errors?.message}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};
