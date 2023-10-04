export type CellItem = {
  matched: boolean;
  color: "red" | " green" | "blue" | string;
  shape: "circle" | "square" | "triangle" | string;
  id?: number
};
