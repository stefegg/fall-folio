import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./Style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
