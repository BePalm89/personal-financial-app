import {
  Box,
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
import { useTheme } from "@emotion/react";

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
  errorMessage?: string;
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
  errorMessage,
  icon,
  prefix,
  colorTag,
}) => {
  const theme = useTheme();

  return (
    <Box marginBottom={theme.space[200]}>
      <FormControl id={name} isRequired={isRequired} isInvalid={!!errors}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          {prefix && <InputLeftElement>{prefix}</InputLeftElement>}
          {colorTag && <InputLeftElement>{colorTag}</InputLeftElement>}
          <Input
            type={type}
            id={name}
            placeholder={placeholder}
            {...register(name, { required: isRequired ? errorMessage : false })}
          ></Input>
          {icon && (
            <InputRightElement>
              <img src={`/img/${icon}.svg`} />
            </InputRightElement>
          )}
        </InputGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {errors && <FormErrorMessage>{errors?.message}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};
