import { DatabaseConfig } from "Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "Core/Database/Contracts/DatabaseHandle";
import { DatabaseHandleFactory } from "Core/Database/Contracts/DatabaseHandleFactory";
import { injectable } from "inversify";
import mysql, { Connection, ConnectionOptions } from 'mysql2/promise'
import { MysqlDatabaseHandle } from "./MysqlDatabaseHandle";

@injectable()
class MysqlDatabaseHandleFactory implements DatabaseHandleFactory {
  /**
   * @inheritdoc
   */
  public async make(config: DatabaseConfig): Promise<DatabaseHandle> {
    const connection = await this.createConnection(config);
    return new MysqlDatabaseHandle(connection, config);
  }

  /**
   * Create's the connection to the database
   * 
   * @param {DatabaseConfig} config
   * @returns {Promise<Connection>}
   */
  private async createConnection(config: DatabaseConfig): Promise<Connection> {
    const connectionOptions = this.buildConnectionOptions(config);
    return await mysql.createConnection(connectionOptions);
  }

  /**
   * Transforms our database config to MySQL specific connection options
   * 
   * @param {DatabaseConfig} config
   * @returns {ConnectionOptions}
   */
  private buildConnectionOptions(config: DatabaseConfig): ConnectionOptions {
    return {
      ...config.connection,
      waitForConnections: true,
      queueLimit: 0,
      namedPlaceholders: true
    }
  }
}

export { MysqlDatabaseHandleFactory }