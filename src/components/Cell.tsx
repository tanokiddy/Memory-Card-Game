import React from "react";
import "./Cell.css";
import { CellItem } from "../types";

export interface CellProps {
  cell: CellItem
  handleClick: Function;
  index: number
}


const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { cell, handleClick, index } = props;
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <button
      className={`board-item ${cell.open ? `item-${cell.color}` : ""} ${
        cell.open ? `item-${cell.shape}` : ""
      }`}
      onClick={() => {
        handleClick(cell, index);
      }}
    ></button>
  );
};

export default Cell;
