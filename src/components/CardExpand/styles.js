import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.plat};
  padding: 0px 12px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const HeadText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const HeadIcon = styled.img`
  height: 28px;
  width: 28px;
  cursor: pointer;
  transition: 1s;
  filter: ${({ expand }) =>
    expand
      ? "invert(61%) sepia(52%) saturate(485%) hue-rotate(6deg) brightness(96%) contrast(98%)"
      : "none"};
  transform: ${({ expand }) => (expand ? "rotate(90deg)" : "none")};
  &:hover {
    filter: ${({ theme }) => theme.filter};

    transform: rotate(45deg);
    transition-property: filter, transform;
    transition-duration: 2s, 1s;
  }
`;

export const Body = styled.div`
  background: ${({ theme }) => theme.secondary_bg};
  height: ${({ expand }) => (expand ? "250px" : "0px")};
  transition: height 1.5s;
  overflow: scroll;
`;

export const BodyText = styled.p`
  padding: 12px;
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) =>
    !props.expand ? props.theme.secondary_bg : props.theme.primary_bg};
  transition: color 1.5s;
  transition-delay: 0.25s;
`;
