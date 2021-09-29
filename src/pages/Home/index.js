import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";
import { DisplayComponent } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <DisplayComponent />
    </Wrapper>
  );
};

export default Home;
