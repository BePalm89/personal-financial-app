import { Box, Flex } from "@chakra-ui/react";
import { AmountBox } from "../../components/AmountBox/AmountBox";
import { TextComponent } from "../../components/TextComponent/TextComponent";
import "./Overview.scss";
import { BoxComponent } from "../../components/BoxComponent/BoxComponent";
import { ArrowRightIcon, PotsIcon } from "../../assets/icons/customIcons";
import { NumberDisplayComponent } from "../../components/NumberDisplayComponent/NumberDisplayComponent";
import { ItemWithAmountComponent } from "../../components/ItemWithAmountComponent/ItemWithAmountComponent";

export const Overview = () => {
  const handleNavigationToDetails = () => {
    console.log("clicked");
  };

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
      <Flex marginTop={400}>
        <BoxComponent
          title={{ text: "Pots", variant: "heading2" }}
          link={{
            label: "See Details",
            type: "button",
            onClick: handleNavigationToDetails,
            variant: "tertiary",
            rightIcon: <ArrowRightIcon width="12px" />,
          }}
        >
          <Flex gap={300}>
            <Box
              bgColor="beige.100"
              padding={250}
              borderRadius="12px"
              flex={0.5}
            >
              <Flex gap={200} alignItems="center">
                <PotsIcon color="secondary.green" boxSize="32px" />
                <Flex gap={100} flexDirection="column">
                  <TextComponent text="Total Saved" variant="heading4Reg" />
                  <NumberDisplayComponent
                    amount={850}
                    prefix="$"
                    displayType="text"
                    fixedDecimalScale={true}
                    thousandSeparator={true}
                    style="amount"
                  />
                </Flex>
              </Flex>
            </Box>
            <Box flex={1}>
              <ItemWithAmountComponent
                label={{ text: "Saving", variant: "heading5Reg" }}
                amount={{
                  amount: 159,
                  prefix: "$",
                  displayType: "text",
                  style: "amount-small",
                }}
                variant="outline"
                bgColor="secondary.green"
              />
              {/*               <ItemWithAmountComponent
                label={{ text: "Saving", variant: "heading5Reg" }}
                amount={{
                  amount: 159,
                  prefix: "$",
                  displayType: "text",
                  style: "amount-small",
                  decimalScale: 2,
                }}
                variant="filled"
                bgColor="secondary.green"
              /> */}
            </Box>
          </Flex>
        </BoxComponent>
      </Flex>
    </Box>
  );
};
