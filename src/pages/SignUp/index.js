import React, { useEffect, useState } from "react";
import { FormWizard } from "../../components/index";
import { Wrapper } from "./styles";
import { pages } from "./constants";

const SignUp = () => {
  return (
    <Wrapper>
      <FormWizard pages={pages} />
    </Wrapper>
  );
};

export default SignUp;
