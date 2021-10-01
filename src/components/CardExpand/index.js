import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, Header, Body, HeadText, HeadIcon, BodyText } from "./styles";
import atoms from "../../atoms";
import { useRecoilState } from "recoil";

const CardExpand = ({ title, body }) => {
  const theme = useTheme();
  const [expand, setExpand] = useState(false);
  const [colorTheme] = useRecoilState(atoms.colorTheme);
  return (
    <Wrapper>
      <Header colorTheme={colorTheme}>
        <HeadText colorTheme={colorTheme}>{title}</HeadText>
        <HeadIcon
          expand={expand}
          onClick={() => setExpand(!expand)}
          src={theme.icons.plusIcon}
          colorTheme={colorTheme}
        />
      </Header>
      <Body colorTheme={colorTheme} expand={expand}>
        <BodyText colorTheme={colorTheme} expand={expand}>
          {body}
        </BodyText>
      </Body>
    </Wrapper>
  );
};

export default CardExpand;
