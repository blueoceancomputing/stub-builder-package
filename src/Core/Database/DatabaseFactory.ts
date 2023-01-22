import { inject, interfaces } from "inversify";
import { has, IConfig } from 'config'
import Types from "@Container/Types";
import { DatabaseConfig } from "@Core/Database/Contracts/DatabaseConfig";
import { DatabaseNotFoundException } from "@Core/Exceptions/DatabaseNotFoundException";
import { Dialects } from "./Dialect/Dialects";
import { DialectContract } from "./Dialect/DialectContract";

class DatabaseFactory {
  /**
   * @var {string} CONFIG_PREFIX
   * @static
   */
  private static CONFIG_PREFIX = 'databases'

  /**
   * @var {IConfig} configReader
   */
  private configReader: IConfig

  /**
   * @var {interfaces.Factory<DialectContract>}
   */
  private databaseDialectFactory: interfaces.Factory<DialectContract>;

  public constructor(
    @inject(Types.Config) configReader: IConfig,
    @inject('Factory<DatabaseDialect>') databaseDialectFactory: interfaces.Factory<DialectContract>,
  ) {
    this.configReader = configReader;
    this.databaseDialectFactory = databaseDialectFactory;
  }

  /**
   * Make a database instance for the given database
   * 
   * @param {string} databaseName 
   * @returns {}
   * 
   * @throws {DatabaseNotFoundException}
   * @throws {DatabaseDialectNotFoundException}
   */
  public make(databaseName: string) {
    const databaseConfigKey = DatabaseFactory.CONFIG_PREFIX + '.' + databaseName;

    // No database found within the config - @throw {DatabaseNotFoundException}
    if (!this.configReader.has(databaseConfigKey)) {
      throw new DatabaseNotFoundException(databaseName);
    }

    // We've got the database config
    const databaseConfig = this.configReader.get<DatabaseConfig>(databaseConfigKey)
    const dialect = this.databaseDialectFactory(databaseConfig.dialect);
  }


}

export { DatabaseFactory }