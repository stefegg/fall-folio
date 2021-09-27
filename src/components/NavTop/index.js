import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, HeaderOne, SubHeader, Icon } from "./styles";

const NavTop = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <HeaderOne>Stef Egbert</HeaderOne>
      <SubHeader>Software Developer</SubHeader>
      <Icon />
    </Wrapper>
  );
};

export default NavTop;
