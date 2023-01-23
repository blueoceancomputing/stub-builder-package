import { DatabaseHandle } from "Core/Database/Contracts/DatabaseHandle";
import { MysqlDatabaseHandle } from "Core/Database/Dialect/Mysql/MysqlDatabaseHandle";
import { MysqlQuery } from "Core/Database/Dialect/Mysql/MysqlQuery";
import { QueryResult } from "Core/Database/Query/QueryResult";
import { injectable } from "inversify";
import { InformationSchemaTable } from "./InformationSchemaRepository.types";
import { Repository } from "./Repository";
import { Dictionary } from "./types";

class InformationSchemaRepository<TEntity extends Dictionary, TPersistence extends Dictionary = TEntity> extends Repository<TEntity, TPersistence> {
  /**
   * @param {DatabaseHandle} handle 
   */
  public constructor (handle: DatabaseHandle) {
    super(handle)
  }

  /**
   * Get's all the tables for the handles database
   * 
   * @returns {Promise<QueryResult<InformationSchemaTable>>}
   */
  public getTables (): Promise<QueryResult<InformationSchemaTable>> {
    const query = new MysqlQuery(
      `
        SELECT *
        FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = :databaseName
      `,
      {
        databaseName: this.handle.config.connection.database
      }
    )
    return this.handle.run<InformationSchemaTable>(query);
  }
}

export { InformationSchemaRepository }