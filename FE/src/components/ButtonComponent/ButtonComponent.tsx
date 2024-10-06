import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "destroy";
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <Button
      onClick={onClick}
      isDisabled={disabled}
      variant={variant}
      size="md"
      fontSize="h4"
      lineHeight="base"
      fontWeight="bold"
    >
      {label}
    </Button>
  );
};
