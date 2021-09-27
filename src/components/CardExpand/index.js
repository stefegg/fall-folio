import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, Header, Body, HeadText, HeadIcon, BodyText } from "./styles";
import "../../index.css";

const CardExpand = ({ title, body }) => {
  const theme = useTheme();
  const [expand, setExpand] = useState(false);
  return (
    <Wrapper>
      <Header>
        <HeadText>{title}</HeadText>
        <HeadIcon
          expand={expand}
          onClick={() => setExpand(!expand)}
          src={theme.icons.plusIcon}
          // className={"plus"}
        />
      </Header>
      <Body expand={expand}>
        <BodyText expand={expand}>{body}</BodyText>
      </Body>
    </Wrapper>
  );
};

export default CardExpand;
