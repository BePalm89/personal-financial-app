import { Box, Flex } from "@chakra-ui/react";
import { AmountBox } from "../../components/AmountBox/AmountBox";
import { TextComponent } from "../../components/TextComponent/TextComponent";
import "./Overview.scss";
export const Overview = () => {
  return (
    <Box marginTop={300}>
      <TextComponent text="Overview" variant="heading1" />
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        gap={300}
      >
        <AmountBox
          label="Current Balance"
          amount={4836}
          bgColor="grey.900"
          textColor="white"
        />
        <AmountBox
          label="Income"
          amount={3814.25}
          bgColor="white"
          textColor="grey.900"
        />
        <AmountBox
          label="Expenses"
          amount={1700.5}
          bgColor="white"
          textColor="grey.900"
        />
      </Flex>
    </Box>
  );
};
