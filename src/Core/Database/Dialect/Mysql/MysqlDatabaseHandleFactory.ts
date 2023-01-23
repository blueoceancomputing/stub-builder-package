import { DatabaseConfig } from "@Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "@Core/Database/Contracts/DatabaseHandle";
import { DatabaseHandleFactory } from "@Core/Database/Contracts/DatabaseHandleFactory";
import { injectable } from "inversify";
import { knex } from 'knex'
import { MysqlDatabaseHandle } from "./MysqlDatabaseHandle";

@injectable()
class MysqlDatabaseHandleFactory implements DatabaseHandleFactory {
  /**
   * @inheritdoc
   */
  public make(config: DatabaseConfig): DatabaseHandle {
    const connection = knex(config);
    return new MysqlDatabaseHandle(connection);
  }
}

export { MysqlDatabaseHandleFactory }