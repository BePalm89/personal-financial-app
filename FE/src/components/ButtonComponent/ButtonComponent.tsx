import React from "react";
import { Button } from "@chakra-ui/react";
import { ButtonComponentProps } from "../../types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  leftIcon,
  rightIcon,
  width = "auto",
  marginTop = 0,
}) => {
  return (
    <Button
      onClick={onClick}
      isDisabled={disabled}
      variant={variant}
      size="lg"
      fontSize="h4"
      lineHeight="base"
      fontWeight="bold"
      width={width}
      marginTop={marginTop}
      type={type}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {label}
    </Button>
  );
};
