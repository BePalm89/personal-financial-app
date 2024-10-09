import { useState } from "react";
import "./App.scss";
import theme from "./theme/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
function App() {
  const [loggedId, setLoggedIn] = useState<boolean>(false);

  return (
    <ChakraProvider theme={theme}>
      <Box p={250} className="container">
        <Router>
          <Routes>
            <Route
              path="/home"
              element={loggedId ? <Home /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn}/>}
            ></Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
