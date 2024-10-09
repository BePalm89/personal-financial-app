import React from "react";
import { Button } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

interface ButtonComponentProps {
  label: string;
  type: 'button' | 'submit' | 'reset',
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "destroy";
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type = 'button',
  onClick,
  disabled = false,
  variant = "primary",

}) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      isDisabled={disabled}
      variant={variant}
      size="lg"
      fontSize="h4"
      lineHeight="base"
      fontWeight="bold"
      width="100%"
      marginTop={theme.space[200]}
      type={type}
    >
      {label}
    </Button>
  );
};
