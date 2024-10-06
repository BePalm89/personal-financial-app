import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Colors from "./foundations/color";
import { fontSize, fontWeights, fonts, lineHeights } from "./foundations/typography";
import spacing from "./foundations/spacing";

const theme = extendTheme({
  fonts: fonts,
  fontSizes: fontSize,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  colors: Colors,
  space: spacing,

  components: {
    Button: Button
  },
});

export default theme;
