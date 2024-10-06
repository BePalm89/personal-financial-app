
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Public Sans', sans-serif",
    heading: "'Public Sans', sans-serif",
  },
  
  fontSizes: {
    h1: "2rem",       
    h2: "1.25rem",   
    h3: "1rem",      
    h4: "0.9375rem", 
    h5: "0.75rem",   
  },
  
  fontWeights: {
    bold: 700,
    regular: 400,     
  },

  lineHeights: {
    shorter: "120%",
    base: "150%",
  },

  colors: {
    beige: {
      500: "#98908B",
      100: "#F8F4F0",
    },
    grey: {
      900: "#201F24",
      500: "#696868",
      300: "#B3B3B3",
      100: "#F2F2F2",
    },
    secondary: {
      green: "#277C78",   
      yellow: "#F2CDAC", 
      cyan: "#82C9D7",    
      navy: "#626070",    
      red: "#C94736",     
      purple: "#826CB0",
    },
    other: {
      purple: "#AF81BA",    
      turquoise: "#597C7C", 
      brown: "#93674F",    
      magenta: "#934F6F",
      blue: "#3F82B2",      
      navyGrey: "#97A0AC",
      armyGreen: "#7F9161",
      gold: "#CAB361",      
      orange: "#BE6C49",
    },
    white: "#FFFFFF",
  },

  space: {
    500: "2.5rem",  
    400: "2rem",    
    300: "1.5rem",  
    250: "1.25rem", 
    200: "1rem",    
    150: "0.75rem", 
    100: "0.5rem",  
    50: "0.25rem",
  },
});

export default theme;
