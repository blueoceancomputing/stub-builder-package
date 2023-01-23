import { DatabaseHandle } from "Core/Database/Contracts/DatabaseHandle";
import { MysqlDatabaseHandle } from "Core/Database/Dialect/Mysql/MysqlDatabaseHandle";
import { MysqlQuery } from "Core/Database/Dialect/Mysql/MysqlQuery";
import { QueryResult } from "Core/Database/Query/QueryResult";
import { injectable } from "inversify";
import { InformationSchemaColumn, InformationSchemaKeyColumnUsage, InformationSchemaTable } from "./InformationSchemaRepository.types";
import { Repository } from "./Repository";

class InformationSchemaRepository extends Repository<any> {
  /**
   * @param {DatabaseHandle} handle 
   */
  public constructor(handle: DatabaseHandle) {
    super(handle)
  }

  /**
   * Get's all the tables for the handles database
   * 
   * @returns {Promise<QueryResult<InformationSchemaTable>>}
   */
  public getTables(): Promise<QueryResult<InformationSchemaTable>> {
    const query = new MysqlQuery(
      `
        SELECT *
        FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = :databaseName
      `,
      { databaseName: this.handle.config.connection.database }
    )
    return this.handle.run<InformationSchemaTable>(query);
  }

  /**
   * Get's all the tables columns for the handles database and given table name
   * 
   * @param {string} tableName
   * 
   * @returns {Promise<QueryResult<InformationSchemaColumn>>}
   */
  public getTableColumns(tableName: string): Promise<QueryResult<InformationSchemaColumn>> {
    const query = new MysqlQuery(
      `
        SELECT *
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = :databaseName
        AND TABLE_NAME = :tableName
        ORDER BY ORDINAL_POSITION
      `,
      {
        databaseName: this.handle.config.connection.database,
        tableName
      }
    )
    return this.handle.run<InformationSchemaColumn>(query);
  }

  /**
   * Get's all the tables key column usages for the handles database and given table name
   * 
   * @param {string} tableName
   * 
   * @returns {Promise<QueryResult<InformationSchemaKeyColumnUsage>>}
   */
  public getTableKeyColumnUsage(tableName: string): Promise<QueryResult<InformationSchemaKeyColumnUsage>> {
    const query = new MysqlQuery(
      `
        SELECT *
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA = :databaseName
        AND TABLE_NAME = :tableName
        ORDER BY ORDINAL_POSITION
      `,
      {
        databaseName: this.handle.config.connection.database,
        tableName
      }
    )
    return this.handle.run<InformationSchemaKeyColumnUsage>(query);
  }
}

export { InformationSchemaRepository }