import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, Icon, CatWrapper, CatHeader } from "./styles";
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

  const categories = [
    { id: 0, title: "About" },
    { id: 1, title: "Components" },
  ];

  return (
    <Wrapper>
      <CatWrapper sideBarWidth={sideBarWidth}>
        {categories.map((cat) => (
          <CatHeader sideBarWidth={sideBarWidth}>{cat.title}</CatHeader>
        ))}
      </CatWrapper>
      <Icon sideBarWidth={sideBarWidth} onClick={() => sideBarClick()} />
    </Wrapper>
  );
};

export default NavSide;
