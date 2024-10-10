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
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { SidebarComponent } from "./components/SidebarComponent/SidebarComponent";
function App() {
  const [loggedId, setLoggedIn] = useState<boolean>(false);

  return (
    <ChakraProvider theme={theme}>
      <Box p={250} className="container">
        <Router>
          {loggedId && <SidebarComponent />}
          <Routes>
            <Route
              path="/home"
              element={loggedId ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route
              path="/register"
              element={<Register setLoggedIn={setLoggedIn} />}
            ></Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
