import React, { useEffect, useState } from "react";
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
      matched: false,
    };

    if (
      !objectArray.some(
        (obj: any) =>
          obj.color === newObject.color &&
          obj.shape === newObject.shape &&
          obj.matched === newObject.matched
      )
    ) {
      objectArray.push(newObject);
    }
  }

  const gridArr = objectArray.concat(objectArray);
  const grid = gridArr.map((item: any, index: any) => ({
    ...item,
    id: index + 1,
  }));

  const [gridList, setGridList] = useState<CellItem[]>(grid);
  const [cellOne, setCellOne] = useState<CellItem | null>(null);
  const [cellTwo, setCellTwo] = useState<CellItem | null>(null);

  // const handleClick = (index: number) => {
  //   const idItem = gridList[index].id;
  //   const newGrid = gridList.map((item: any) => {
  //     if (item.id === idItem) {
  //       return {
  //         ...item,
  //         matched: true,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setGridList(newGrid);
  // };

  const chooseCell = (cell: any) => {
    cellOne ? setCellTwo(cell) : setCellOne(cell);
  };

  useEffect(() => {
    if (cellOne && cellTwo) {
      if (cellOne.color === cellTwo.color && cellOne.shape === cellTwo.shape) {
        setGridList((prevGrid: any) => {
          return prevGrid.map((item: any) => {
            if (item.color === cellOne.color && item.shape === cellOne.shape) {
              return {
                ...item,
                matched: true,
              };
            } else {
              return item;
            }
          });
        });
      }
      setTimeout(() => {
        setCellOne(null);
        setCellTwo(null);
      }, 500);
    }
  }, [cellOne, cellTwo]);

  return (
    <div className="board">
      {gridList.map((cell: any, index: number) => (
        <Cell
          // handleClick={handleClick}
          // index={index}
          key={index}
          cell={cell}
          chooseCell={chooseCell}
          flipped={cell === cellOne || cell === cellTwo || cell.matched}
        />
      ))}
    </div>
  );
};

export default Board;
