import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${({ data }) =>
    data && `repeat(${data.length}, 300px)`};
  grid-column-gap: 0.5rem;
  align-items: start;
`;

export const Group = styled.div`
  background: gray;
  border-radius: 5px;
  padding: 0.5rem;
`;

export const Item = styled.div`
  min-height: 150px;
  background: ${({ dragging, dragItem, params }) =>
    dragging &&
    dragItem.current.groupIdx === params.groupIdx &&
    dragItem.current.itemIdx === params.itemIdx
      ? "black"
      : "white"};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ItemPara = styled.p`
  margin: 0px;
`;

export const GroupTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;
