import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./Style";
import Navigation from "./navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
