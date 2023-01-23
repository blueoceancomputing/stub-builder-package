import container from "Container/Container";
import Types from "Container/Types";
import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { injectable } from "inversify";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { DataTypeMatcher } from "Modules/Matchers/DataTypes/DataTypeMatcher";

@injectable()
class DataTypeTransformer {
  /**
   * @var {Array<DataTypeMatcher>} dataTypeMatches
   */
  private dataTypeMatches: Array<DataTypeMatcher>

  /**
   * @todo change to a DataTypeMatcherFactory that returns all DataTypeMatcher's
   */
  public constructor () {
    this.dataTypeMatches = container.getAll<DataTypeMatcher>(Types.DataTypeMatcher);
  }

  /**
   * Transforms the InformationSchemaColumn into a DataTypeContract
   * 
   * @param {InformationSchemaColumn} column
   * 
   * @returns {DataTypeContract}
   * 
   * @throws {Error}
   */
  public transform(column: InformationSchemaColumn): DataTypeContract {
    for (const matcher of this.dataTypeMatches) {
      if (matcher.match(column)) {
        return matcher.process(column)
      }
    }

    throw new Error('Unable to process column');
  }
}

export { DataTypeTransformer }