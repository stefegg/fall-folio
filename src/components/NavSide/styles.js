import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 140px);
  background: red;
  color: ${({ theme }) => theme.colors.gold};
  padding: 20px;
  position: relative;
`;

export const Icon = styled.div`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 50px;
  position: absolute;
  bottom: 24px;
  left: ${(props) => (props.sideBarWidth !== "40px" ? "20px" : "4px")};
  transition: left 0.5s;
`;

export const CatWrapper = styled.div`
  width: ${(props) => (props.sideBarWidth !== "40px" ? "100%" : "0%")};
  background: green;
  transition: width 1s;
`;

export const CatHeader = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => (props.sideBarWidth !== "40px" ? "24px" : "0px")};
  transition: height 0.5s;
  overflow: hidden;
`;

export const CatExpand = styled.div``;
