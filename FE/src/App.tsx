import { useEffect, useRef, useState } from "react";
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
import { ScreenSize } from "./hooks/useScreenSize";
import { Transaction } from "./pages/Transactions/Transaction";
function App() {
  const [loggedId, setLoggedIn] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<ScreenSize>("lg");

  const prevScreenSize = useRef<ScreenSize>(screenSize);

  useEffect(() => {
    if (prevScreenSize.current !== screenSize) {
      prevScreenSize.current = screenSize; // Update the ref to the new size
    }
  }, [screenSize]);

  return (
    <ChakraProvider theme={theme}>
      <Box p={250} className="container">
        <Router>
          {loggedId && (
            <ResponsiveComponent>
              {({ size }) => {
                if (size !== screenSize) {
                  setScreenSize(size);
                }
                return size === "lg" ? (
                  <SidebarComponent
                    isMinimize={isMinimized}
                    setIsMinimize={setIsMinimized}
                  />
                ) : (
                  <SidebarSmallScreenComponent size={size} />
                );
              }}
            </ResponsiveComponent>
          )}
          <Box
            ml={
              loggedId
                ? screenSize === "lg"
                  ? isMinimized
                    ? "80px"
                    : "320px"
                  : "0px"
                : "0px"
            }
            height="100%"
          >
            <Routes>
              <Route
                path="/overview"
                element={loggedId ? <Overview /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/transactions"
                element={loggedId ? <Transaction /> : <Navigate to="/login" />}
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
