import { ColorType, ShapeType } from "./board";

export type CellItem = {
    matched: boolean;
    color: ColorType.Red | ColorType.Green | ColorType.Blue
    shape: ShapeType.Circle | ShapeType.Square | ShapeType.Triangle
    id: number
  };
  