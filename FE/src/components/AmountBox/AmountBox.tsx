import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { TextComponent } from "../TextComponent/TextComponent";
import { NumericFormat } from "react-number-format";
import "./AmountBox.scss";
import { RecurringBillsIcon } from "../../assets/icons/custonIcons";

interface AmountBoxProps {
  label: string;
  amount: number;
  bgColor: string;
  textColor: string;
  icon?: string;
}

export const AmountBox: React.FC<AmountBoxProps> = ({
  label,
  amount,
  bgColor,
  textColor,
  icon,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "recurringBills":
        return <RecurringBillsIcon color={textColor} />;
    }
  };
  return (
    <Box
      bgColor={bgColor}
      color={textColor}
      flex="1"
      padding={300}
      borderRadius="12px"
      boxShadow="0px 8px 24px 0px rgba(0, 0, 0, 0.05)"
      marginTop={500}
    >
      <Flex direction="column" gap={400}>
        {icon && renderIcon()}
        <TextComponent text={label} variant="heading4Reg" />
        <NumericFormat
          value={amount}
          prefix="$"
          displayType="text"
          decimalScale={2}
          fixedDecimalScale={true}
          thousandSeparator={true}
          className="amount"
        />
      </Flex>
    </Box>
  );
};
