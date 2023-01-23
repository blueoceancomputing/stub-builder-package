import { DataType } from "./DataType";
import { DataTypeContract } from "./DataTypeContract";

class BooleanDataType implements DataTypeContract {
  public readonly dateType: DataType;
  public readonly defaultValue: boolean | null;

  public constructor(dataType: DataType, defaultValue: boolean | null) {
      this.dateType = dataType;
      this.defaultValue = defaultValue;
  }
}

export { BooleanDataType }