import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, ResponsiveValue } from "@chakra-ui/react";
import "./SidebarItem.scss";
import {
  BudgetsIcon,
  OverviewIcon,
  PotsIcon,
  RecurringBillsIcon,
  TransactionIcon,
} from "../../assets/icons/customIcons";

interface SidebarItemProps {
  icon: string;
  label: string;
  url: string;
  direction?: FlexDirectionType;
  variant?: "menuItem" | "menuItemSmall";
  width?: string;
}

type FlexDirectionType = ResponsiveValue<
  "row" | "column" | "row-reverse" | "column-reverse"
>;

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  url,
  direction = "row",
  variant = "menuItem",
  width,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "overview":
        return <OverviewIcon color="grey.300" />;
      case "transactions":
        return <TransactionIcon color="grey.300" />;
      case "budgets":
        return <BudgetsIcon color="grey.300" />;
      case "pots":
        return <PotsIcon color="grey.300" />;
      case "bills":
        return <RecurringBillsIcon color="grey.300" />;
    }
  };
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={url}
      variant={variant}
      display="flex"
      flexDirection={direction}
      gap={direction === "column" ? "8px" : "16px"}
      width={width}
    >
      {renderIcon()}
      {label}
    </ChakraLink>
  );
};
