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
import { Overview } from "./pages/Overview/Overview";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { SidebarComponent } from "./components/SidebarComponent/SidebarComponent";
import { ResponsiveComponent } from "./components/ResponsiveComponent/ResponsiveComponent";
import { SidebarSmallScreenComponent } from "./components/SidebarSmallScreenComponent/SidebarSmallScreenComponent";
function App() {
  const [loggedId, setLoggedIn] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  return (
    <ChakraProvider theme={theme}>
      <Box p={250} className="container">
        <Router>
          {loggedId && (
            <ResponsiveComponent>
              {({ size }) =>
                size === "lg" ? (
                  <SidebarComponent
                    isMinimize={isMinimized}
                    setIsMinimize={setIsMinimized}
                  />
                ) : (

                    <SidebarSmallScreenComponent size={size} />

                )
              }
            </ResponsiveComponent>
          )}
          <Box
            ml={loggedId ? (isMinimized ? "80px" : "320px") : "0px"}
            height="100%"
          >
            <Routes>
              <Route
                path="/overview"
                element={loggedId ? <Overview /> : <Navigate to="/login" />}
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
          </Box>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
