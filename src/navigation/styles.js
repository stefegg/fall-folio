import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideTrack = styled.div`
  min-width: ${(props) => props.sideBarWidth};
  transition: width, 0.5s;
`;

export const PageTrack = styled.div`
  min-width: ${(props) => `calc(100vw - ${props.sideBarWidth})`};
  transition: width, 0.5s;
`;
