import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { TextComponentProps } from "../../types";

export const TextComponent: React.FC<TextComponentProps> = ({
  text,
  variant,
  color,
  link,
  linkUrl,
}) => {
  return (
    <Text variant={variant} color={color}>
      {text}{" "}
      {link && (
        <ChakraLink as={ReactRouterLink} to={linkUrl}>
          {link}
        </ChakraLink>
      )}
    </Text>
  );
};
