import { DataType } from "./DataType";
import { DataTypeContract } from "./DataTypeContract";

class DateTimeDataType implements DataTypeContract {
  public readonly dateType: DataType;
  public readonly precision: number;

  public constructor(dataType: DataType, precision: number) {
      this.dateType = dataType;
      this.precision = precision;
  }
}

export { DateTimeDataType }