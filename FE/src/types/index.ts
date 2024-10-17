import { IconProps } from "@chakra-ui/react";

export interface ButtonComponentProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "destroy" | "ghost";
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  width?: string;
  marginTop?: number;
}

export interface BoxComponentProps {
  title: TextComponentProps;
  link?: ButtonComponentProps;
  children: React.ReactNode;
  buttons?: ButtonComponentProps[];
  tag?: string;
}

export interface TextComponentProps {
  text: string;
  variant:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4Reg"
    | "heading4Bold"
    | "heading5Reg"
    | "heading5Bold";
  link?: string;
  linkUrl?: string;
  color?: string;
}

export interface ItemWithAmountProps {
  label: TextComponentProps;
  amount: NumberDisplayProps;
  variant: "outline" | "filled";
  bgColor: string;
}

export interface NumberDisplayProps {
  amount: number;
  prefix?: string;
  displayType: "text" | "input" | undefined;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  thousandSeparator?: boolean;
  style?: string;
}
