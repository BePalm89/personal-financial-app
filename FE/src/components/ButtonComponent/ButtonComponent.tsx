import React from "react";
import { Button, IconProps } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

interface ButtonComponentProps {
  label: string;
  type: 'button' | 'submit' | 'reset',
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "destroy" | "ghost";
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type = 'button',
  onClick,
  disabled = false,
  variant = "primary",
  leftIcon,
  rightIcon
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
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {label}
    </Button>
  );
};
