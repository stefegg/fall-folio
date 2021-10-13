import React, { useState } from "react";
import { Wrapper, Label, ErrorText, Input, InputWrapper } from "./styles";

const InputField = ({
  label,
  error,
  inputHeight,
  inputWidth,
  borderColor,
  type,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper borderColor={borderColor} focused={focused}>
        <Input
          inputHeight={inputHeight}
          inputWidth={inputWidth}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type={type ? type : "text"}
        />
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default InputField;