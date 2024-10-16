export const fonts = {
  body: "'Public Sans', sans-serif",
  heading: "'Public Sans', sans-serif",
};

export const fontSize = {
  h1: "2rem",
  h2: "1.25rem",
  h3: "1rem",
  h4: "0.9375rem",
  h5: "0.75rem",
};

export const fontWeights = {
  bold: 700,
  regular: 400,
};

export const lineHeights = {
  shorter: "120%",
  base: "150%",
};

export const Headings = {
  variants: {
    heading1: {
      fontSize: fontSize.h1,
      lineHeight: lineHeights.shorter,
      fontWeight: fontWeights.bold,
    },
    heading2: {
      fontSize: fontSize.h2,
      lineHeight: lineHeights.shorter,
      fontWeight: fontWeights.bold,
    },
    heading3: {
      fontSize: fontSize.h3,
      lineHeight: lineHeights.base,
      fontWeight: fontWeights.bold,
    },
    heading4Reg: {
      fontSize: fontSize.h4,
      lineHeight: lineHeights.base,
      fontWeight: fontWeights.regular,
    },
    heading4Bold: {
      fontSize: fontSize.h4,
      lineHeight: lineHeights.base,
      fontWeight: fontWeights.bold,
    },
    heading5Reg: {
      fontSize: fontSize.h5,
      lineHeight: lineHeights.base,
      fontWeight: fontWeights.regular,
    },
    heading5Bold: {
      fontSize: fontSize.h5,
      lineHeight: lineHeights.base,
      fontWeight: fontWeights.bold,
    },
  },
};

export const Link = {
  baseStyle: {
    color: "grey.900",
    fontWeight: fontWeights.bold,
    textDecoration: "underline",
  },
  variants: {
    menuItem: {
      padding: "16px",
      paddingLeft: "32px",
      justifyContent: "flex-start",
      alignItems: "center",
      textDecoration: "none",
      color: "grey.300",
      fontSize: "h3",
      textTransform: "capitalize",
      _hover: {
        color: "white",
        border: "none",
        textDecoration: "none",
        ".chakra-icon": {
          color: "white",
        },
      },
      _focus: {
        bg: "white",
        color: "grey.900",
        border: "none",
        borderLeftWidth: "4px",
        borderLeftStyle: "solid",
        borderLeftColor: "secondary.green",
        boxShadow: "none",
        marginRight: "30px",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        ".chakra-icon": {
          color: "secondary.green",
        },
      },
    },
    menuItemSmall: {
      padding: "16px",
      paddingBottom: "32px",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      color: "grey.300",
      fontSize: "h3",
      textTransform: "capitalize",
      _hover: {
        color: "white",
        border: "none",
        textDecoration: "none",
        ".chakra-icon": {
          color: "white",
        },
      },
      _focus: {
        bg: "white",
        color: "grey.900",
        border: "none",
        borderBottomWidth: "4px",
        borderBottomStyle: "solid",
        borderBottomColor: "secondary.green",
        boxShadow: "none",
        borderTopRightRadius: "12px",
        borderTopLeftRadius: "12px",
        ".chakra-icon": {
          color: "secondary.green",
        },
      },
    },
  },
};
