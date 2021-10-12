import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 15%;
  padding-bottom: 0px;
  background: #c9c9e9;
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
