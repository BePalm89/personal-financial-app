import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "solid" | "outline" | "ghost";
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "solid",
}) => {
  return (
    <Button
      onClick={onClick}
      isDisabled={disabled}
      variant={variant}
      colorScheme="blue"
      size="md"
    >
      {label}
    </Button>
  );
};
