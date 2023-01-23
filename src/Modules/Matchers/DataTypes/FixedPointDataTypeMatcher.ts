import { injectable } from "inversify";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { StringDataTypeMatcher } from "./StringDataTypeMatcher";

@injectable()
class FixedPointDataTypeMatcher extends StringDataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'decimal',
      'numeric',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.FIXED_POINT_NUMBER;
}

export { FixedPointDataTypeMatcher }