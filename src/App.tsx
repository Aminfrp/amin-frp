import Layouts from "./components/layouts/Layouts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: "#FAFAFA",
            dark: "#18191A",
            main: "#FAFAFA",
          },
          secondary: {
            light: "#FFB400",
            main: "#FFB400",
            dark: "#FFB400",
          },
          info: {
            main: "#2B2B2B",
            dark:"#FAFAFA",
            light:"#2B2B2B"
          },
          success:{
            main:"#E1E1E1",
            light:"#E1E1E1",
            dark:"#2B2B2B"
          }
        },
      }),
    [mode]
  );
  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Layouts />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
