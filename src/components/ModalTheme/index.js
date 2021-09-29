import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper, Icon } from "./styles";

const ModalTheme = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  return (
    <Wrapper>
      <Icon onClick={() => setShowSiteModal(null)} />
    </Wrapper>
  );
};

export default ModalTheme;
