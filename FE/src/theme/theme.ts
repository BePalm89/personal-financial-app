import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Colors from "./foundations/color";
import { fontSize, fontWeights, fonts, lineHeights } from "./foundations/typography";
import spacing from "./foundations/spacing";
import { body } from "./foundations/global";

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

  styles: {
    global: {
      body : body
    }
  }
});

export default theme;
