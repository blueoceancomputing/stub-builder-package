import Types from "Container/Types";
import { InformationSchemaKeyColumnUsage } from "Core/Repository/InformationSchemaRepository.types";
import { inject, injectable } from "inversify";
import { RelationshipContract, RelationshipsContract } from "Modules/Entities/RelationshipContract";
import { RelationshipMatcher } from "Modules/Matchers/Relationships/RelationshipMatcher";

@injectable()
class RelationshipTransformer {
  /**
   * @var {RelationshipMatcher} relationshipMatcher
   */
  private relationshipMatcher: RelationshipMatcher

  /**
   * @var {RelationshipMatcher} relationshipMatcher
   */
  public constructor (
    @inject(Types.RelationshipMatcher) relationshipMatcher: RelationshipMatcher
  ) {
    this.relationshipMatcher = relationshipMatcher;
  }

  /**
   * Transforms the InformationSchemaColumn into a DataTypeContract
   * 
   * @param {InformationSchemaKeyColumnUsage} keyColumnUsage
   * 
   * @returns {DataTypeContract}
   * 
   * @throws {Error}
   */
  public transform(keyColumnUsages: Array<InformationSchemaKeyColumnUsage>): Array<RelationshipContract> {
    return keyColumnUsages.reduce((carry: Array<RelationshipContract>, keyColumnUsage) => {
      const transformedKeyColumnUsage = this.transformKeyColumnUsage(keyColumnUsage)
      if (transformedKeyColumnUsage) {
        carry.push(transformedKeyColumnUsage)
      }

      return carry;
    }, [])
  }

  /**
   * Attempts to transform a to InformationSchemaKeyColumnUsage to a RelationshipContract
   * 
   * @param {InformationSchemaKeyColumnUsage} keyColumnUsage
   * @returns {RelationshipContract | null}
   */
  private transformKeyColumnUsage(keyColumnUsage: InformationSchemaKeyColumnUsage): RelationshipContract | null {
    if (!this.relationshipMatcher.match(keyColumnUsage)) {
      return null
    }

    return this.relationshipMatcher.process(keyColumnUsage)
  }
}

export { RelationshipTransformer }