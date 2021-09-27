import React, { useEffect, useState } from "react";
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
