import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: gray;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  opacity: 1;
  z-index: 2;
`;
