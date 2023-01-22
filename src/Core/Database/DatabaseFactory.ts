import { inject } from "inversify";
import { IConfig } from 'config'
import Types from "@Container/Types";
import { DatabaseNotFoundException } from "@Core/Exceptions/DatabaseNotFoundException";

class DatabaseFactory {

  private static CONFIG_PREFIX = 'databases'

  /**
   * @var {IConfig} configReader
   */
  private configReader: IConfig

  public constructor(
    @inject(Types.Config) configReader: IConfig
  ) {
    this.configReader = configReader
  }

  /**
   * Make a database instance for the given database
   * 
   * @param {string} databaseName 
   * @returns {}
   * 
   * @throws {DatabaseNotFoundException}
   */
  public make(databaseName: string) {
    const databaseConfigKey = DatabaseFactory.CONFIG_PREFIX + '.' + databaseName;

    // No database found within the config - @throw {DatabaseNotFoundException}
    if (!this.configReader.has(databaseConfigKey)) {
      throw new DatabaseNotFoundException(databaseName);
    }
  }
}

export { DatabaseFactory }