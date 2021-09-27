import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeadText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.plat};
`;

export const HeadIcon = styled.div`
  height: 32px;
  width: 32px;
  background: ${({ theme }) => theme.colors.plat};
  border-radius: 50px;
  cursor: pointer;
`;

export const Body = styled.div`
  color: ${({ theme }) => theme.colors.plat};
  height: ${(props) => (props.expand ? "100px" : "0px")};
  transition: height 1.5s;
  overflow: hidden;
`;

export const BodyText = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) =>
    props.expand ? props.theme.colors.plat : props.theme.colors.jet};
  transition: color 1.5s;
  transition-delay: 0.25s;
`;
