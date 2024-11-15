import React from "react";
import Home from "./Pages/Home";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Home />
    </ThemeProvider>
  );
}

export default App;
