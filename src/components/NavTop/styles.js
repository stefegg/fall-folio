import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.gold};
  padding: 30px 20px;
  background: ${({ theme }) => theme.colors.indy};
  align-items: flex-start;
  justify-content: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.plat}`};
  overflow: hidden;
  position: relative;
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
    filter: invert(61%) sepia(52%) saturate(485%) hue-rotate(6deg)
      brightness(96%) contrast(98%);
    transform: rotate(30deg);
    transition-property: filter, transform;
    transition-duration: 2s, 1s;
  }
`;
