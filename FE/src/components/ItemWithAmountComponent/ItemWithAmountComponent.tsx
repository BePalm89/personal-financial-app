import "./ItemWithAmountComponent.scss";
import React from "react";
import { ItemWithAmountProps } from "../../types";
import { Box, Flex } from "@chakra-ui/react";
import { TextComponent } from "../TextComponent/TextComponent";
import { NumberDisplayComponent } from "../NumberDisplayComponent/NumberDisplayComponent";

export const ItemWithAmountComponent: React.FC<ItemWithAmountProps> = ({
  label,
  amount,
  variant,
  bgColor,
}) => {
  return (
    <>
      {variant === "outline" ? (
        <Flex gap={200}>
          <Box bgColor={bgColor} width="4px" borderRadius="12px"></Box>
          <Flex flexDirection="column">
            <TextComponent {...label} />
            <NumberDisplayComponent {...amount} />
          </Flex>
        </Flex>
      ) : (
        <Box
          bgColor="beige.100"
          borderLeftColor={bgColor}
          borderLeftWidth="4px"
          padding={200}
          width="100%"
          display="flex"
          justifyContent="space-between"
          borderRadius="8px"
        >
          <TextComponent {...label} />
          <NumberDisplayComponent {...amount} />
        </Box>
      )}
    </>
    /* 

    <Flex gap={variant === "outline" ? 50 : 100}>
      {variant === "outline" && (
        <Box
          bgColor={bgColor}
          width="4px"
          height="43px"
          borderRadius="12px"
        ></Box>
      )}
      <TextComponent {...label} />
      <NumberDisplayComponent {...amount} />
    </Flex> */
  );
};
