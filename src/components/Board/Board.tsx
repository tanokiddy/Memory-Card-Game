import React, { useEffect, useState } from "react";
import { CellItem } from "@/types";
import css from './Board.module.css'
import Cell from "../Cell";
import { createGridList } from "../../utils";

const Board: React.FC = () => {
  const [gridList, setGridList] = useState<CellItem[]>(() => createGridList());
  const [cellOne, setCellOne] = useState<CellItem | null>(null);
  const [cellTwo, setCellTwo] = useState<CellItem | null>(null);
  const [totalTime, setTotalTime] = useState<number>(0);

  const chooseCell = (cell: CellItem) => {
    if (cellOne && cellTwo) return;
    cellOne && cellOne !== cell ? setCellTwo(cell) : setCellOne(cell);
    setTotalTime((preState) => preState + 1);
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
      }, 1000);
    }
  }, [cellOne, cellTwo]);

  useEffect(() => {
    const isDone = gridList.every((item) => item.matched);
    if (isDone) {
      setTimeout(() => {
        alert(`Congratulations!!! You have completed this game in ${totalTime/2} tries`);
      }, 1500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridList]);

  return (
    <div className={css.board}>
      {gridList.map((cell) => (
        <Cell
          key={cell.id}
          cell={cell}
          chooseCell={chooseCell}
          flipped={cell === cellOne || cell === cellTwo || cell.matched}
        />
      ))}
    </div>
  );
};

export default Board;
