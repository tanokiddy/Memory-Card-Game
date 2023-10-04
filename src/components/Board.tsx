import React, { useState, useEffect, useMemo } from "react";
import Cell, { CellProps } from "./Cell";
import "./Board.css";

// const Shape = ["circle", "square", "triangle"];

// const Color = ["red", "green", "blue"];

// const Grid: CellProps[] = Array.from({ length: 16 }, (_, i) => {
//   const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1) - 1;
//   return {
//     shape: Shape[randomNumber],
//     color: Color[randomNumber],
//   };
// });

const Board: React.FC = () => {
  const [cellList, setCellList] = useState<CellProps[]>(() => {
    const results = [];
    for (let i = 0; i < 16; i++) {
      const cell: CellProps = {
        open: false,
        shape: "triangle",
        color: "red",
      };
      results.push(cell);
    }
    return results;
  });
  // states...
  useEffect(() => {
    // Initialize the game board with random shapes and colors
  }, []);

  const handleCellClick = (index: number) => {
    // Reveal cell, check for matches, update game state, and handle game completion
  };

  return (
    <div className="board">
      {/* Render each cell in the board */}
      {cellList.map((cell, index) => (
        <Cell open={cell.open} color={cell.color} shape={cell.shape} key={index} />
      ))}
    </div>
  );
};

export default Board;
