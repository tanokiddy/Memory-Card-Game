import React, { useEffect, useState } from "react";
import "./Board.css";
import { CellItem } from "@/types";
import Cell from "../Cell";
import { createGridList } from "../../utils";

const Board: React.FC = () => {
  const grid = createGridList();

  const [gridList, setGridList] = useState<CellItem[]>(grid);
  const [cellOne, setCellOne] = useState<CellItem | null>(null);
  const [cellTwo, setCellTwo] = useState<CellItem | null>(null);

  const chooseCell = (cell: CellItem) => {
    cellOne && cellOne !== cell ? setCellTwo(cell) : setCellOne(cell);
  };

  useEffect(() => {
    if (cellOne && cellTwo) {
      if (cellOne.color === cellTwo.color && cellOne.shape === cellTwo.shape) {
        setGridList((prevGrid) => {
          return prevGrid.map((item) => {
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
      {gridList.map((cell, index) => (
        <Cell
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
