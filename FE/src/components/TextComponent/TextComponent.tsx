import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
interface TextComponentProps {
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
export const TextComponent: React.FC<TextComponentProps> = ({
  text,
  variant,
  color,
  link,
  linkUrl
}) => {
  return (
    <Text variant={variant} color={color}>
      {text} {link && <ChakraLink as={ReactRouterLink} to={linkUrl}>{link}</ChakraLink>}
    </Text>
  );
};
