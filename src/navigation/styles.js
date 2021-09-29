import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideTrack = styled.div`
  width: ${(props) => props.sideBarWidth};
  transition: width, 0.5s;
`;

export const PageTrack = styled.div`
  width: 100%;
`;
