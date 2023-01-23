import { injectable } from "inversify";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { StringDataTypeMatcher } from "./StringDataTypeMatcher";

@injectable()
class JsonDataTypeMatcher extends StringDataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'json',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.JSON;
}

export { JsonDataTypeMatcher }