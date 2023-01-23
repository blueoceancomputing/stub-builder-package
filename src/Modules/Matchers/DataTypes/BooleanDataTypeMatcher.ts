import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { BooleanDataType } from "Modules/Entities/DataTypes/BooleanDataType";
import { DataTypeMatcher } from "./DataTypeMatcher";

class BooleanDataTypeMatcher extends DataTypeMatcher {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public matchableDataTypes: Array<string> = [
    'tinyint'
  ];

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public formattedDataType: DataType = DataType.BOOLEAN;
  
  /**
   * @inheritdoc
   */
  public createDataType(input: InformationSchemaColumn): DataTypeContract {
    const defaultValue = this.getDefaultValue(input.COLUMN_DEFAULT);
    return new BooleanDataType(this.formattedDataType, defaultValue);
  }

  /**
   * Gets the default value for the data type
   * 
   * @param {InformationSchemaColumn['COLUMN_DEFAULT']} columnDefault 
   * @returns {boolean | null}
   */
  private getDefaultValue(columnDefault: InformationSchemaColumn['COLUMN_DEFAULT']): boolean | null {
    let defaultValue = null;
    switch (columnDefault) {
      case '1':
        defaultValue = true;
        break;
      case '0':
        defaultValue = false;
        break;
      default:
        defaultValue = null;
        break;
    }
    return defaultValue
  }
}

export { BooleanDataTypeMatcher }