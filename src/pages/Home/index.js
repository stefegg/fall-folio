import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";
import { DisplayComponent } from "../../components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const Home = () => {
  const theme = useTheme();
  const [colorTheme] = useRecoilState(atoms.colorTheme);

  return (
    <Wrapper colorTheme={colorTheme}>
      <DisplayComponent />
    </Wrapper>
  );
};

export default Home;
