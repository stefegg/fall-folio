import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import { blueTheme, darkTheme } from "./Style";
import atoms from "./atoms";
import { useRecoilState } from "recoil";

function App() {
  const [colorTheme] = useRecoilState(atoms.colorTheme);
  const setTheme = () => {
    switch (colorTheme) {
      case "blueTheme":
        return blueTheme;
      case "darkTheme":
        return darkTheme;
      default:
        return blueTheme;
    }
  };
  return (
    <ThemeProvider theme={setTheme()}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
