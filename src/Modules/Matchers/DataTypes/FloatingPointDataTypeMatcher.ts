import { injectable } from "inversify";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { StringDataTypeMatcher } from "./StringDataTypeMatcher";

@injectable()
class FloatingPointDataTypeMatcher extends StringDataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'float',
      'double',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.FLOATING_POINT_NUMBER;
}

export { FloatingPointDataTypeMatcher }