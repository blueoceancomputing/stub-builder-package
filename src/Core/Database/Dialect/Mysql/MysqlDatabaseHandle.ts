import { DatabaseConfig } from "@Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "@Core/Database/Contracts/DatabaseHandle";
import { QueryResult } from "@Core/Database/Query/QueryResult";
import { Dictionary } from "@Core/Repository/types";
import { injectable } from "inversify";
import { Connection } from 'mysql2/promise'
import { MysqlQuery } from "./MysqlQuery";

@injectable()
class MysqlDatabaseHandle implements DatabaseHandle {
  /**
   * @var {Connection} connection
   */
  public readonly connection: Connection;

  /**
   * @var {DatabaseConfig} config
   */
  public readonly config: DatabaseConfig;

  /**
   * @param {Knex} connection 
   * @param {DatabaseConfig} config 
   */
  public constructor (connection: Connection, config: DatabaseConfig) {
    this.connection = connection;
    this.config = config;
  }

  /**
   * @inheritdoc
   */
  public async run<TEntity extends Dictionary>(query: MysqlQuery): Promise<QueryResult<TEntity>> {
    const [results] = await this.connection.execute<Array<TEntity>>(
      query.getSql(),
      query.getValues()
    );
    return { results }
  }
}

export { MysqlDatabaseHandle }