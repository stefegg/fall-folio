import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const DoubleInput = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Header = styled.h1`
  font-size: 20px;
`;

export const SubHeader = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;
