import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { injectable } from "inversify";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { LengthDataType } from "Modules/Entities/DataTypes/LengthDataType";
import { DataTypeMatcher } from "./DataTypeMatcher";

@injectable()
class StringDataTypeMatcher extends DataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'varchar',
      'text',
      'char',
      'longtext',
      'datetime',
      'date',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.STRING;
  
  /**
   * @inheritdoc
   */
  public createDataType(input: InformationSchemaColumn): DataTypeContract {
    const maxLength = input.CHARACTER_MAXIMUM_LENGTH ?? Number.MAX_SAFE_INTEGER;
    return new LengthDataType(this.formattedDataType, maxLength);
  }
}

export { StringDataTypeMatcher }