import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper } from "./styles";
import { CardExpand } from "../index";
import { EXPAND_BODY, EXPAND_TITLE } from "./constants";

const DisplayComponent = () => {
  const theme = useTheme();
  const [displayComponent, setDisplayComponent] = useRecoilState(
    atoms.displayComponent
  );
  const renderComponent = (displayComponent) => {
    switch (displayComponent) {
      case "cardExpand":
        return <CardExpand title={EXPAND_TITLE} body={EXPAND_BODY} />;
    }
  };
  return <Wrapper>{renderComponent(displayComponent)}</Wrapper>;
};

export default DisplayComponent;
