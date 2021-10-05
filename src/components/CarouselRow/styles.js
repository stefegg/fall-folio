import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  margin-left: 48px;
`;

export const UpperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const LowerRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.data.length}, 1fr);
  grid-row: 1;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  transform: ${({ translateValue }) => `translateX(${translateValue}%)`};
  transition: transform 1.5s;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
  width: 8.5%;
  justify-content: space-around;
`;
