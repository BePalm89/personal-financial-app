import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./SidebarItem.scss";
import {
  BudgetsIcon,
  OverviewIcon,
  PotsIcon,
  RecurringBillsIcon,
  TransactionIcon,
} from "./custonIcons";

interface SidebarItemProps {
  icon: string;
  label: string;
  url: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  url,
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
    <>
      <ChakraLink as={ReactRouterLink} to={url} variant="menuItem">
        {renderIcon()}
        {label}
      </ChakraLink>

    </>
  );
};
