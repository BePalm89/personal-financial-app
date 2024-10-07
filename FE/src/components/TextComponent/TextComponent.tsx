import { Link, Text } from "@chakra-ui/react";

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
  color?: string;
}
export const TextComponent: React.FC<TextComponentProps> = ({
  text,
  variant,
  color,
  link,
}) => {
  return (
    <Text variant={variant} color={color}>
      {text} {link && <Link>{link}</Link>}
    </Text>
  );
};
