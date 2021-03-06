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
import { useHistory } from "react-router-dom";

const NavSide = () => {
  const theme = useTheme();
  const history = useHistory();
  const [sideBarWidth, setSideBarWidth] = useRecoilState(atoms.sideBarWidth);
  const [expand, setExpand] = useState(null);
  const [displayComponent, setDisplayComponent] = useRecoilState(
    atoms.displayComponent
  );

  const sideBarClick = () => {
    if (sideBarWidth === "200px") {
      setSideBarWidth("40px");
    } else setSideBarWidth("200px");
  };

  const clickCat = (id) => {
    if (expand === id) {
      setExpand(null);
    } else setExpand(id);
  };

  const categories = [
    {
      id: 0,
      title: "About",
      subcategories: [
        { id: "0-1", title: "Bio", onClick: () => history.push("/bio") },
        { id: "0-2", title: "Resume", onClick: () => history.push("/resume") },
      ],
      onClick: () => clickCat(0),
    },
    {
      id: 1,
      title: "Bits",
      subcategories: [
        {
          id: "1-0",
          title: "Expanding Card",
          onClick: () => {
            history.push("/");
            setDisplayComponent("cardExpand");
          },
        },
        {
          id: "1-1",
          title: "Carousel Row",
          onClick: () => {
            history.push("/");
            setDisplayComponent("carouselRow");
          },
        },
        {
          id: "1-2",
          title: "Drag N Drop",
          onClick: () => {
            history.push("/");
            setDisplayComponent("dragDrop");
          },
        },
      ],
      onClick: () => clickCat(1),
    },
    {
      id: 2,
      title: "Larger Pieces",
      subcategories: [
        { id: "2-1", title: "Sign Up", onClick: () => history.push("/signup") },
      ],
      onClick: () => clickCat(2),
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
              key={cat.id}
            >
              {cat.title}
            </CatHeader>
            <CatExpand
              expand={expand}
              catId={cat.id}
              subLength={cat.subcategories ? cat.subcategories.length : 0}
            >
              {cat.subcategories &&
                cat.subcategories.map((sub) => (
                  <SubCatHead key={sub.id} onClick={sub.onClick}>
                    {sub.title}
                  </SubCatHead>
                ))}
            </CatExpand>
          </>
        ))}
      </CatWrapper>
      <Icon sideBarWidth={sideBarWidth} onClick={() => sideBarClick()} />
    </Wrapper>
  );
};

export default NavSide;
