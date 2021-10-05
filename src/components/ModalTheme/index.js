import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper, Icon, Header, Body } from "./styles";
import { Button } from "../index";

const ModalTheme = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [colorTheme, setColorTheme] = useRecoilState(atoms.colorTheme);
  return (
    <Wrapper>
      <Header>
        <Icon
          src={theme.icons.plusIcon}
          onClick={() => setShowSiteModal(null)}
        />
      </Header>
      <Body>
        <Button text={"Light Theme"} />
        <Button
          text={"Blue Theme"}
          onClick={() => {
            setColorTheme("blueColors");
          }}
          textColor={"black"}
          backgroundColor={theme.colors.steel}
          border={`1px solid ${theme.colors.gold}`}
        />
        <Button
          text={"Dark Theme"}
          onClick={() => {
            setColorTheme("darkTheme");
          }}
          border={`1px solid ${theme.colors.white}`}
          textColor={theme.colors.gold}
          backgroundColor={theme.colors.charcoal}
        />
      </Body>
    </Wrapper>
  );
};

export default ModalTheme;
