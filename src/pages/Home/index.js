import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";

const Home = () => {
  const theme = useTheme();

  return <Wrapper>'Hi'</Wrapper>;
};

export default Home;
