import React, { useEffect, useState, useRef } from "react";
import { Wrapper, Group, Item, ItemPara, GroupTitle } from "./styles";

const data = [
  { title: "Group 1", items: ["1", "2", "3"] },
  { title: "Group 2", items: ["4", "5"] },
  // { title: "Group 3", items: ["1", "2", "3"] },
];

const DragDrop = () => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList((oldList) => {
        let newList = [...oldList];
        newList[params.groupIdx].items.splice(
          params.itemIdx,
          0,
          newList[currentItem.groupIdx].items.splice(currentItem.itemIdx, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  return (
    <Wrapper data={list}>
      {list.map((group, groupIdx) => (
        <Group
          key={group.title}
          onDragEnter={
            dragging && !group.items.length
              ? (e) => handleDragEnter(e, { groupIdx, itemIdx: 0 })
              : null
          }
        >
          <GroupTitle>{group.title}</GroupTitle>
          {group.items.map((item, itemIdx) => (
            <Item
              draggable
              onDragStart={(e) => handleDragStart(e, { groupIdx, itemIdx })}
              onDragEnter={
                dragging
                  ? (e) => handleDragEnter(e, { groupIdx, itemIdx })
                  : null
              }
              key={item}
              dragItem={dragItem}
              params={{ groupIdx, itemIdx }}
              dragging={dragging}
            >
              <ItemPara>{item}</ItemPara>
            </Item>
          ))}
        </Group>
      ))}
    </Wrapper>
  );
};

export default DragDrop;
