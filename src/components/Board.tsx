import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

const shapes = ["circle", "square", "triangle"];

const colors = ["red", "green", "blue"];

const Board: React.FC = () => {
  let objectArray: any = [];

  while (objectArray.length < 8) {
    let newObject = {
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      open: false,
    };

    if (
      !objectArray.some(
        (obj: any) =>
          obj.color === newObject.color &&
          obj.shape === newObject.shape &&
          obj.open === newObject.open
      )
    ) {
      objectArray.push(newObject);
    }
  }

  const gridArr = objectArray.concat(objectArray);
  const grid = gridArr.map((item: any, index: any) => ({
    ...item,
    id: index + 1
  }))

  const [gridList, setGridList] = useState(grid);

  const handleClick = (index: number) => {
    const idItem = gridList[index].id
    const newGrid = gridList.map((item:any) => {
      if(item.id === idItem) {
        return {
          ...item,
          open: true
        }
      } else {
        return item
      }
    })
    setGridList(newGrid)
  };

  return (
    <div className="board">
      {gridList.map((cell: any, index: number) => (
        <Cell cell={cell} handleClick={handleClick} key={index} index={index} />
      ))}
    </div>
  );
};

export default Board;
