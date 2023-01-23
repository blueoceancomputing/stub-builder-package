import { DataType } from "./DataType";
import { DataTypeContract } from "./DataTypeContract";

class NumericalDateType implements DataTypeContract {
  public readonly dateType: DataType;
  public readonly minValue: number;
  public readonly maxValue: number;
  public readonly precision: number;

  public constructor(
      dataType: DataType,
      minValue: number,
      maxValue: number,
      precision: number = 0
  ) {
      this.dateType = dataType;
      this.minValue = minValue;
      this.maxValue = maxValue;
      this.precision = precision;
  }
}

export { NumericalDateType }