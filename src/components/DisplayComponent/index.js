import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper } from "./styles";
import { CardExpand, CarouselRow } from "../index";
import {
  EXPAND_BODY,
  EXPAND_TITLE,
  CAROUSEL_TITLE,
  CarouselData,
} from "./constants";

const DisplayComponent = () => {
  const theme = useTheme();
  const [displayComponent, setDisplayComponent] = useRecoilState(
    atoms.displayComponent
  );
  const renderComponent = (displayComponent) => {
    switch (displayComponent) {
      case "cardExpand":
        return <CardExpand title={EXPAND_TITLE} body={EXPAND_BODY} />;
      case "carouselRow":
        return <CarouselRow data={CarouselData} title={CAROUSEL_TITLE} />;
    }
  };
  return <Wrapper>{renderComponent(displayComponent)}</Wrapper>;
};

export default DisplayComponent;
