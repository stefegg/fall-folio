import styled from "styled-components";

export const Wrapper = styled.div`
  width: 450px;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: 8px;
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.border}`};
`;

export const Header = styled.div`
  display: flex;
  padding: 10px;
  align-content: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background: white;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const Body = styled.div`
  background: ${({ theme }) => theme.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
`;
