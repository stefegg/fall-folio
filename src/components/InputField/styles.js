import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : "100%")};
`;

export const Label = styled.span`
  margin-bottom: 6px;
`;

export const ErrorText = styled.span`
  color: red;
  margin-top: 6px;
`;

export const InputWrapper = styled.div`
  border-radius: 4px;
  border: ${({ focused, borderColor, error }) => {
    if (borderColor && !focused) {
      return `1px solid`;
    }
    if (focused && borderColor) {
      return `1px solid ${borderColor}`;
    }
  }};
`;

export const Input = styled.input`
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 6px;
  width: calc(100% - 8px);
  height: ${({ inputHeight }) => (inputHeight ? inputHeight : "30px")};
`;
