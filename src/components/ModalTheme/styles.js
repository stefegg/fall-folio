import styled from "styled-components";

export const Wrapper = styled.div`
  height: 275px;
  width: 450px;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: 8px;
  position: relative;
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
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0px;
`;
