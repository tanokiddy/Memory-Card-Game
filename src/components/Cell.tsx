import React from "react";
import "./Cell.css";

export interface CellProps {
  // Your code here
  open: boolean
  color: "red" | " green" | "blue";
  shape: "circle" | "square" | "triangle";
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { color, shape, open } = props;
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <div
      className={`board-item item-${color} item-${shape}`}
      key={color}
    >
      {color}
    </div>
  );
};

export default Cell;
