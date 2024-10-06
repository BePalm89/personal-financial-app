import { ChakraProvider } from "@chakra-ui/react";
import "./App.scss";
import theme from "./theme/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  );
}

export default App;
