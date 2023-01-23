import { inject, injectable } from "inversify";
import Types from "Container/Types";
import { ColumnTransformer } from "Modules/Transformers/ColumnTransformer";
import { RelationshipTransformer } from "Modules/Transformers/RelationshipTransformer";
import { TableProcessorOptions } from "./Options/TableProcessorOptions";
import { InformationSchemaRepository } from "Core/Repository/InformationSchemaRepository";
import { ColumnContract } from "Modules/Entities/ColumnContract";
import { TableContract } from "Modules/Entities/TableContract";
import { RelationshipContract } from "Modules/Entities/RelationshipContract";

/**
 * The table processor is responsible for fetching the table information and
 * converting it into a more useful structure.
 * 
 * 1. Fetch column information for the given table.
 * 2. Fetch relationships for the table.
 * 3. Construct our TableContract
 */
@injectable()
class TableProcessor {
  /**
   * @var {ColumnTransformer} columnTransformer
   */
  private columnTransformer: ColumnTransformer

  /**
   * @var {RelationshipTransformer} relationshipTransformer
   */
  private relationshipTransformer: RelationshipTransformer

  /**
   * @var {ColumnTransformer} columnTransformer
   * @var {RelationshipTransformer} relationshipTransformer
   */
  public constructor(
    @inject(Types.ColumnTransformer) columnTransformer: ColumnTransformer,
    @inject(Types.RelationshipTransformer) relationshipTransformer: RelationshipTransformer
  ) {
    this.columnTransformer = columnTransformer;
    this.relationshipTransformer = relationshipTransformer;
  }

  /**
   * Processes a database table into a TableContract
   * 
   * @param {TableProcessorOptions} options
   * @returns {Promise<TableContract>}
   */
  public async process(options: TableProcessorOptions): Promise<TableContract> {
    return {
      databaseName: options.databaseName,
      tableName: options.tableName,
      columns: await this.getColumns(options),
      relationships: await this.getRelationships(options)
    }
  }

  /**
   * Gets the columns for a given database table
   * 
   * @param {TableProcessorOptions} options
   * @returns {Promise<Array<ColumnContract>>}
   */
  private async getColumns(options: TableProcessorOptions): Promise<Array<ColumnContract>> {
    const { informationSchemaRepository, tableName } = options
    const columns = await informationSchemaRepository.getTableColumns(tableName);
    
    return columns.results.map(
      (column) => this.columnTransformer.transform(column)
    )
  }

  /**
   * Gets the relationships for a given database table
   * 
   * @param {TableProcessorOptions} options 
   * @returns {Promise<Array<RelationshipContract>>}
   */
  private async getRelationships(options: TableProcessorOptions): Promise<Array<RelationshipContract>> {
    const { informationSchemaRepository, tableName } = options
    const keyColumnUsages = await informationSchemaRepository.getTableKeyColumnUsage('hubpic_ebayorders');
    return this.relationshipTransformer.transform(keyColumnUsages.results)
  }
}

export { TableProcessor }