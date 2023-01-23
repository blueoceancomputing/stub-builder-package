import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { Matcher } from "../Matcher";

abstract class DataTypeMatcher implements Matcher<InformationSchemaColumn, DataTypeContract> {
  /**
   * All the matchable data types
   * 
   * @var {Array<string>}
   */
  public abstract matchableDataTypes: Array<string>;

  /**
   * The formatted data type for this match
   * 
   * @var {DataType}
   */
  public abstract formattedDataType: DataType;
  
  /**
   * @param {InformationSchemaColumn} input
   * @return {boolean}
   */
  public match(input: InformationSchemaColumn): boolean {
    // No DATA_TYPE - can't match
    if (!input.DATA_TYPE) {
      return false;
    }

    return this.matchableDataTypes.includes(input.DATA_TYPE);
  }

  /**
   * Process - create the concrete DataTYpe 
   * 
   * @param {InformationSchemaColumn} input 
   * @returns {DataTypeContract}
   */
  public process(input: InformationSchemaColumn): DataTypeContract {
    return this.createDataType(input)
  }

  /**
   * Create the DataType - proxy for the process
   * 
   * @param {InformationSchemaColumn} input 
   * @returns {DataTypeContract}
   */
  public abstract createDataType(input: InformationSchemaColumn): DataTypeContract;
}

export { DataTypeMatcher }