import { DataTypes } from "./DataTypes";

interface NumericalDateType {
  readonly dateType: DataTypes;
  readonly minValue: number;
  readonly maxValue: number;
  readonly precision: number;
}

export { NumericalDateType }