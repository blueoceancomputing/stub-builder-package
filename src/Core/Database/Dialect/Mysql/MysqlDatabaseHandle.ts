import { DatabaseConfig } from "@Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "@Core/Database/Contracts/DatabaseHandle";
import { injectable } from "inversify";
import { knex, Knex } from 'knex'

@injectable()
class MysqlDatabaseHandle implements DatabaseHandle {
  /**
   * @var {Knex} connection
   */
  public connection: Knex;

  /**
   * @param {Knex} connection 
   */
  public constructor (connection: Knex) {
    this.connection = connection;
  }
}

export { MysqlDatabaseHandle }