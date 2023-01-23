import { DataType } from "./DataType";

interface NumericalDateType {
  readonly dateType: DataType;
  readonly minValue: number;
  readonly maxValue: number;
  readonly precision: number;
}

export { NumericalDateType }