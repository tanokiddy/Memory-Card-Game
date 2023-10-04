import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { CellItem } from "../types";

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

  const [gridList, setGridList] = useState(gridArr)

  const handleClick = (item: CellItem, index:number) => {
    console.log('index: ', index);
    const newGridList = gridList.map((gridListItem: CellItem) => {
      if(gridListItem === item && gridListItem.open === false) {
        console.log(index)
        return {
          ...gridList[index],
          open: true
        }
      } else {
        return gridListItem
      }
    })
    setGridList(newGridList)
  }
  
  return (
    <div className="board">
      {gridList.map((cell: any, index: number) => (
        <Cell cell={cell} handleClick={handleClick} key={index} index={index}/>
      ))}
    </div>
  );
};

export default Board;
