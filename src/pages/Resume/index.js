import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CardExpand } from "../../components";
import { Wrapper } from "./styles";

const Resume = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <CardExpand title={"Test"} body={"Body"} />
      <CardExpand title={"Test"} body={"Body"} />
    </Wrapper>
  );
};

export default Resume;
