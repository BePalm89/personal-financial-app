import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Colors from "./foundations/color";
import {
  Headings,
  Link,
  fontSize,
  fontWeights,
  fonts,
  lineHeights,
} from "./foundations/typography";
import space from "./foundations/spacing";
import { body } from "./foundations/global";

const breakpoints = {
  sm: "600px",
  md: "1024px",
};

const theme = extendTheme({
  breakpoints,
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
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ["dialog, dialogContainer"],
          dialog: {
            pointerEvents: "auto",
          },
          dialogContainer: {
            pointerEvents: "none",
          },
        },
      },
    },
  },

  styles: {
    global: {
      body: body,
    },
  },
});

export default theme;
