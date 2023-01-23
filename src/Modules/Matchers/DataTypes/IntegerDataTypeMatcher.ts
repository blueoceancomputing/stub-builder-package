import { injectable } from "inversify";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { StringDataTypeMatcher } from "./StringDataTypeMatcher";

@injectable()
class IntegerDataTypeMatcher extends StringDataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'smallint',
      'mediumint',
      'int',
      'bigint',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.NUMBER;
}

export { IntegerDataTypeMatcher }