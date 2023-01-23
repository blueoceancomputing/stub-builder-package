import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { DateTimeDataType } from "Modules/Entities/DataTypes/DateTimeDataType";
import { LengthDataType } from "Modules/Entities/DataTypes/LengthDataType";
import { DataTypeMatcher } from "./DataTypeMatcher";

class DateTimeDataTypeMatcher extends DataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
      'time',
      'timestamp',
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.TIMESTAMP;
  
  /**
   * @inheritdoc
   */
  public createDataType(input: InformationSchemaColumn): DataTypeContract {
    const datetimePrecision = input.DATETIME_PRECISION;
    if (null === datetimePrecision) {
        console.error(input);
        throw new Error(`Unable to parse datetime precision for the column: ${input.COLUMN_NAME}`)
    }
    return new DateTimeDataType(this.formattedDataType, datetimePrecision);
  }
}

export { DateTimeDataTypeMatcher }