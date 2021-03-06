import styled, { keyframes } from "styled-components";

const hop = keyframes`
  0% {
    padding-bottom: 0px;
  }
  50% {
    padding-bottom: 10px;
  }
  100% {
    padding-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 99px;
  color: ${({ theme }) => theme.text};
  padding: 0px 20px;
  align-items: flex-start;
  background: ${({ theme }) => theme.secondaryBg};
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const HeaderOne = styled.h1`
  margin: 0px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const SubHeader = styled.p`
  margin: 0px;
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: absolute;
  right: 40px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    filter: ${({ theme }) => theme.filter};
    transform: rotate(30deg);
    transition-property: filter, transform;
    transition-duration: 2s, 1s;
    animation: 1s ${hop} ease-out;
  }
`;
