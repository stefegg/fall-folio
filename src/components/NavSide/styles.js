import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 60px);
  background: red;
  color: ${({ theme }) => theme.colors.gold};
  height: 100%;
`;

export const Icon = styled.div`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 50px;
`;
