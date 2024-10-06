import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import "./App.scss";
import theme from "./theme/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="secondary.cyan" p="500">
        <Text fontSize="h1" fontWeight="bold" color="white">
          Hello, World!
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
