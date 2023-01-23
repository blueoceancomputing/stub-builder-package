import { InformationSchemaKeyColumnUsage } from "Core/Repository/InformationSchemaRepository.types";
import { injectable } from "inversify";
import { RelationshipContract } from "Modules/Entities/RelationshipContract";
import { Matcher } from "../Matcher";

interface RelationshipIntermediary extends InformationSchemaKeyColumnUsage {
  COLUMN_NAME: string;
  REFERENCED_TABLE_NAME: string;
  REFERENCED_COLUMN_NAME: string;
}

@injectable()
class RelationshipMatcher implements Matcher<InformationSchemaKeyColumnUsage, RelationshipContract> {
  /**
   * @param {InformationSchemaKeyColumnUsage} input
   * @return {boolean}
   */
  public match(input: InformationSchemaKeyColumnUsage): boolean {
    return input.CONSTRAINT_NAME !== 'PRIMARY' && 
        this.assertRelationshipIntermediary(input)
  }

  /**
   * Assert that the input has all the required fields
   * 
   * @param {InformationSchemaKeyColumnUsage} input 
   * @returns {input is RelationshipIntermediary}
   */
  private assertRelationshipIntermediary(input: InformationSchemaKeyColumnUsage): input is RelationshipIntermediary {
    return input.COLUMN_NAME !== null &&
        input.REFERENCED_TABLE_NAME !== null &&
        input.REFERENCED_COLUMN_NAME !== null
  }

  /**
   * Process - create the concrete DataTYpe 
   * 
   * @param {InformationSchemaKeyColumnUsage} input 
   * @returns {RelationshipContract}
   */
  public process(input: InformationSchemaKeyColumnUsage): RelationshipContract {
    if (!this.assertRelationshipIntermediary(input)) {
      throw new Error('Unable to assert relationship intermediary');
    }

    return {
      localColumn: input.COLUMN_NAME,
      joinTable: input.REFERENCED_TABLE_NAME,
      joinColumn: input.REFERENCED_COLUMN_NAME
    }
  }
}

export { RelationshipMatcher }