import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, Icon } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const NavSide = () => {
  const theme = useTheme();
  const [sideBarWidth, setSideBarWidth] = useRecoilState(atoms.sideBarWidth);
  const sideBarClick = () => {
    if (sideBarWidth === "200px") {
      setSideBarWidth("40px");
    } else setSideBarWidth("200px");
  };

  return (
    <Wrapper>
      <Icon onClick={() => sideBarClick()} />
      Test
    </Wrapper>
  );
};

export default NavSide;
