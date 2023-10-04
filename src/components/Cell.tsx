import React from "react";
import "./Cell.css";
import { CellItem } from "../types";

export interface CellProps {
  cell: CellItem;
  // index: number
  flipped: boolean;
  chooseCell: Function;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { cell, flipped, chooseCell } = props;

  const handleCellClick = () => {
    chooseCell(cell);
  };

  return (
    <button
      className={`cell ${flipped ? `matched cell-${cell.color} cell-${cell.shape}`  : ""} ${
        cell.matched ? `item-${cell.shape}` : ""
      }`}
      onClick={handleCellClick}
    />
  );
};

export default Cell;
