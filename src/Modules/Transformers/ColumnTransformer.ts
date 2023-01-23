import { inject, injectable } from "inversify";
import Types from "Container/Types";
import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { DataTypeTransformer } from "./DataTypeTransformer";
import { ColumnContract } from "Modules/Entities/ColumnContract";

interface ColumnIntermediary extends InformationSchemaColumn {
  COLUMN_NAME: string;
}

@injectable()
class ColumnTransformer {
  /**
   * @var {DataTypeTransformer} dataTypeTransformer
   */
  private dataTypeTransformer: DataTypeTransformer

  /**
   * @var {DataTypeTransformer} dataTypeTransformer
   */
  public constructor(
    @inject(Types.DataTypeTransformer) dataTypeTransformer: DataTypeTransformer
  ) {
    this.dataTypeTransformer = dataTypeTransformer;
  }

  /**
   * Transforms the InformationSchemaColumn into a ColumnContract
   * 
   * @param {InformationSchemaColumn} column
   * 
   * @returns {ColumnContract}
   * 
   * @throws {Error}
   */
  public transform(column: InformationSchemaColumn): ColumnContract {
    if (!this.assertColumnContract(column)) {
      console.error(column)
      throw new Error('Unable to assert column has all the required fields for transforming')
    }

    return {
      columnName: column.COLUMN_NAME,
      isPrimary: column.COLUMN_KEY === 'PRI',
      isNullable: column.IS_NULLABLE === 'YES',
      dataType: this.dataTypeTransformer.transform(column),
    }
  }

  /**
   * Assert that the column has all the required parameters
   * 
   * @param {InformationSchemaColumn} column
   * @returns {column is ColumnIntermediary}
   */
  private assertColumnContract(column: InformationSchemaColumn): column is ColumnIntermediary {
    return column.COLUMN_NAME != null
  }
}

export { ColumnTransformer }