import styled from "styled-components";

export const Wrapper = styled.button`
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "40px")};
  color: ${({ textColor, theme }) => (textColor ? textColor : theme.text)};
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.secondaryBg};
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 1;
  }
`;
