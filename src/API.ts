import { inject, injectable, interfaces } from 'inversify';
import { CommandContract } from 'Modules/Commands/CommandContract';
import { BuildFromTableDefinitionCommandContract, BuildFromTableDefinitionOptions } from 'Modules/Commands/BuildFromTableDefinitionCommand';
import { Commands } from 'Modules/Commands/Commands';
import { DatabaseFactory } from 'Core/Database/DatabaseFactory';
import Types from 'Container/Types';
import { DatabaseContract } from 'Core/Database/Contracts/DatabaseContract';
import { InformationSchemaRepository } from 'Core/Repository/InformationSchemaRepository';
import container from 'Container/Container';
import { DataTypeTransformer } from 'Modules/Transformers/DataTypeTransformer';
import { RelationshipTransformer } from 'Modules/Transformers/RelationshipTransformer';
import { ColumnTransformer } from 'Modules/Transformers/ColumnTransformer';
import { TableProcessor } from 'Modules/Processors/TableProcessor';
import { ApplicationFactory } from 'Applications/ApplicationFactory';

@injectable()
class API {
  /**
   * @var {interfaces.Factory<CommandContract>}
   */
  private commandFactory: interfaces.Factory<CommandContract>;

  /**
   * @var {DatabaseFactory}
   */
  private databaseFactory: DatabaseFactory;

  /**
   * @var {ApplicationFactory}
   */
  private applicationFactory: ApplicationFactory;

  public constructor(
    @inject('Factory<Command>') commandFactory: interfaces.Factory<CommandContract>,
    @inject(Types.DatabaseFactory) databaseFactory: DatabaseFactory,
    @inject(Types.ApplicationFactory) applicationFactory: ApplicationFactory,
  ) {
    this.commandFactory = commandFactory
    this.databaseFactory = databaseFactory
    this.applicationFactory = applicationFactory
  }

  /**
   * Entrypoint for generating new stubs from a table
   */
  public async buildFromTableDefintion(options: BuildFromTableDefinitionOptions): Promise<boolean> {
    const command = <BuildFromTableDefinitionCommandContract> this.commandFactory(Commands.BUILD_FROM_TABLE_DEFINITION);
    const resolvedOptions = await command.resolveOptions(options);

    /**
     * Application related testing
     */
    const application = this.applicationFactory.make(options.applicationName);
    console.log(application)

    // /**
    //  * Database related testing
    //  */
    // const database: DatabaseContract = this.databaseFactory.make(options.databaseName);
    // const handle = await database.dialect.connect(database.config);
    // const informationSchemaRepository = new InformationSchemaRepository(handle);

    // // Testing the column datatype transforming
    // const tableProcessor = container.get<TableProcessor>(Types.TableProcessor);
    // const table = await tableProcessor.process({
    //   informationSchemaRepository,
    //   databaseName: options.databaseName,
    //   tableName: 'hubpic_ebayorders'
    // })
    
    // console.log(table);

    return true;
  }
}

export { API }