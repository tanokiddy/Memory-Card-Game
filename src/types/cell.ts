import { ColorType, ShapeType } from "./board";

export type CellItem = {
    matched: boolean;
    color: ColorType.red | ColorType.green | ColorType.blue
    shape: ShapeType.circle | ShapeType.square | ShapeType.triangle
    id: number
  };
  