const Button = {
  variants: {
    primary: {
      bg: "grey.900",
      color: "white",
      _hover: {
        bg: "grey.500",
      },
      _disabled: {
        bg: "grey.500",
        color: "white",
        cursor: "not-allowed",
        pointerEvents: "none",
        _hover: {
          bg: "grey.500",
        },
      },
    },
    secondary: {
      bg: "beige.100",
      color: "grey.900",
      _hover: {
        bg: "white",
        color: "grey.900",
        border: "1px solid",
        borderColor: "beige.500",
      },
      _disabled: {
        bg: "white",
        color: "grey.900",
        cursor: "not-allowed",
        pointerEvents: "none",
        border: "1px solid",
        borderColor: "beige.500",
        _hover: {
          bg: "white",
        },
      },
    },
    tertiary: {
      bg: "transparent",
      color: "grey.500",
      _hover: {
        bg: "transparent",
        color: "grey.900",
      },
      _disabled: {
        bg: "transparent",
        color: "grey.900",
        cursor: "not-allowed",
        pointerEvents: "none",
        _hover: {
          bg: "transparent",
        },
      },
    },
    destroy: {
      bg: "secondary.red",
      color: "white",
      _hover: {
        bg: "other.red",
        color: "white",
      },
      _disabled: {
        bg: "other.red",
        color: "white",
        cursor: "not-allowed",
        pointerEvents: "none",
        _hover: {
          bg: "other.red",
        },
      },
    },
  },
};

export default Button;