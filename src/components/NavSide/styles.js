import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 140px);
  color: ${(props) => props.theme[`${props.colorTheme}`].text};
  background: ${(props) => props.theme[`${props.colorTheme}`].secondary_bg};
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
  transition: width 1s;
`;

export const CatHeader = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => (props.sideBarWidth !== "40px" ? "32px" : "0px")};
  transition: height 0.5s;
  overflow: hidden;
  cursor: pointer;
  font-size: 20px;
`;

export const CatExpand = styled.div`
  width: 100%;
  height: ${(props) =>
    props.expand === props.catId ? `${props.subLength * "20"}px` : "0px"};
  overflow: hidden;
  transition: height 0.5s;
`;

export const SubCatHead = styled.div`
  width: 100%;
  margin-bottom: 4px;
  padding-left: 8px;
  cursor: pointer;
  color: ${(props) => props.theme[`${props.colorTheme}`].secondary_text};
`;
