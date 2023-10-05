import React from "react";
import css from "./Cell.module.css";
import { CellItem } from "@/types";
import clsx from "clsx";

export interface CellProps {
  cell: CellItem;
  flipped: boolean;
  chooseCell: Function;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { cell, flipped, chooseCell } = props;
  const { color, shape, matched } = cell;
  
  const handleCellClick = () => {
    chooseCell(cell);
  };
  return (
    <button
      className={clsx(
        css.cell,
        flipped ? `${css.matched} ${css[`cell_${color}`]} ${css[`cell_${shape}`]}` : "",
        matched ? css[`cell_${shape}`] : ""
      )}
      onClick={handleCellClick}
    />
  );
};

export default Cell;