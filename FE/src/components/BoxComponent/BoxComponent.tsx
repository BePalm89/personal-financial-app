import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { TextComponent } from "../TextComponent/TextComponent";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { BoxComponentProps } from "../../types";

export const BoxComponent: React.FC<BoxComponentProps> = ({
  title,
  link,
  children,
  buttons,
  tag,
}) => {
  return (
    <Box
      bgColor="white"
      padding={400}
      borderRadius="12px"
      boxShadow="0px 8px 24px 0px rgba(0, 0, 0, 0.05)"
      boxSize="lg"
    >
      <Flex direction="column">
        <Flex alignItems="baseline" justifyContent="space-between">
          <TextComponent {...title} />
          {link && <ButtonComponent {...link} />}
        </Flex>
        {children}
        {buttons?.map((buttonProps) => (
          <ButtonComponent key={buttonProps.label} {...buttonProps} />
        ))}
      </Flex>
    </Box>
  );
};
