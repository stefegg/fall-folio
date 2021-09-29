import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper } from "./styles";

const ModalTheme = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(
    atoms.displayComponent
  );
  return <Wrapper onClick={() => setShowSiteModal(null)}> </Wrapper>;
};

export default ModalTheme;
