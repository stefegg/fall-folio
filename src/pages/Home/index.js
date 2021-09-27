import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";
import { NavTop } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <NavTop></NavTop>
    </Wrapper>
  );
};

export default Home;
