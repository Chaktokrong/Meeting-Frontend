import * as React from "react";
import Router from "./routes";
import { BrowserRouter as Routers } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(false);
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          background: {
            default: prefersDarkMode ? "#121212" : "#0B82C4",
          },
        },
        typography: {
          fontFamily: ["CenturyFont"].join(","),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routers>
          <Router
            prefersDarkMode={prefersDarkMode}
            setPrefersDarkMode={setPrefersDarkMode}
          />
        </Routers>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
