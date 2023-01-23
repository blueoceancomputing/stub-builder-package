import { DataType } from "./DataType";
import { DataTypeContract } from "./DataTypeContract";

class LengthDataType implements DataTypeContract {
  public readonly dateType: DataType;
  public readonly maxLength: number;

  public constructor(dataType: DataType, maxLength: number) {
      this.dateType = dataType;
      this.maxLength = maxLength;
  }
}

export { LengthDataType }