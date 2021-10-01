import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.primary_bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
