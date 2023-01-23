import { DatabaseConfig } from "@Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "@Core/Database/Contracts/DatabaseHandle";
import { QueryResult } from "@Core/Database/Query/QueryResult";
import { injectable } from "inversify";
import { Knex } from 'knex'
import { MysqlQuery } from "./MysqlQuery";

@injectable()
class MysqlDatabaseHandle implements DatabaseHandle {
  /**
   * @var {Knex} connection
   */
  public readonly connection: Knex;

  /**
   * @var {DatabaseConfig} config
   */
  public readonly config: DatabaseConfig;

  /**
   * @param {Knex} connection 
   * @param {DatabaseConfig} config 
   */
  public constructor (connection: Knex, config: DatabaseConfig) {
    this.connection = connection;
    this.config = config;
  }

  /**
   * @inheritdoc
   */
  public async run<TEntity>(query: MysqlQuery): Promise<QueryResult<TEntity>> {
    throw new Error('Not implemented')
  }
}

export { MysqlDatabaseHandle }