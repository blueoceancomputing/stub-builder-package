import { DatabaseConfig } from "Core/Database/Contracts/DatabaseConfig";
import { DatabaseHandle } from "Core/Database/Contracts/DatabaseHandle";
import { DatabaseHandleFactory } from "Core/Database/Contracts/DatabaseHandleFactory";
import { inject, injectable, interfaces } from "inversify";
import { DialectContract } from "../DialectContract";
import { Dialects } from "../Dialects";

@injectable()
class MysqlDialect implements DialectContract {
  /**
   * @var {interfaces.Factory<DatabaseHandleFactory>}
   */
  private databaseHandleFactoryFactory: interfaces.Factory<DatabaseHandleFactory>;

  public constructor(
    @inject('Factory<DatabaseHandleFactory>') databaseHandleFactoryFactory: interfaces.Factory<DatabaseHandleFactory>,
  ) {
    this.databaseHandleFactoryFactory = databaseHandleFactoryFactory
  }

  /**
   * @inheritdoc
   */
  public async connect(config: DatabaseConfig): Promise<DatabaseHandle> {
    const databaseHandleFactory = <DatabaseHandleFactory> this.databaseHandleFactoryFactory(Dialects.MYSQL)
    return databaseHandleFactory.make(config)
  }
}

export { MysqlDialect }