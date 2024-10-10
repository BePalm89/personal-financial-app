import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Colors from "./foundations/color";
import { Headings, Link, fontSize, fontWeights, fonts, lineHeights } from "./foundations/typography";
import space from "./foundations/spacing";
import { body } from "./foundations/global";

const theme = extendTheme({
  fonts: fonts,
  fontSizes: fontSize,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  colors: Colors,
  space: space,

  components: {
    Button: Button,
    Text: Headings,
    Link: Link,
  },

  styles: {
    global: {
      body : body
    }
  }
});

export default theme;
