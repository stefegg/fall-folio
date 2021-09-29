import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  Wrapper,
  Icon,
  CatWrapper,
  CatHeader,
  SubCatHead,
  CatExpand,
} from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const NavSide = () => {
  const theme = useTheme();
  const [sideBarWidth, setSideBarWidth] = useRecoilState(atoms.sideBarWidth);
  const [expand, setExpand] = useState(null);
  const sideBarClick = () => {
    if (sideBarWidth === "200px") {
      setSideBarWidth("40px");
    } else setSideBarWidth("200px");
  };

  const clickSubCat = (id) => {
    if (expand === id) {
      setExpand(null);
    } else setExpand(id);
  };

  const categories = [
    {
      id: 0,
      title: "About",
      subcategories: [
        { id: 0, title: "Bio" },
        { id: 1, title: "Resume" },
      ],
      onClick: () => clickSubCat(0),
    },
    {
      id: 1,
      title: "Bits",
      subcategories: [
        { id: 0, title: "Component 1" },
        { id: 1, title: "Component 2" },
      ],
      onClick: () => clickSubCat(1),
    },
  ];

  return (
    <Wrapper>
      <CatWrapper sideBarWidth={sideBarWidth}>
        {categories.map((cat) => (
          <>
            <CatHeader
              onClick={() => cat.onClick()}
              sideBarWidth={sideBarWidth}
            >
              {cat.title}
            </CatHeader>
            {/* {expand === cat.id && ( */}
            <CatExpand
              expand={expand}
              catId={cat.id}
              subLength={cat.subcategories ? cat.subcategories.length : 0}
            >
              {cat.subcategories &&
                cat.subcategories.map((sub) => (
                  <SubCatHead>{sub.title}</SubCatHead>
                ))}
            </CatExpand>
            {/* )} */}
          </>
        ))}
      </CatWrapper>
      <Icon sideBarWidth={sideBarWidth} onClick={() => sideBarClick()} />
    </Wrapper>
  );
};

export default NavSide;
