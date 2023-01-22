import { inject, injectable, interfaces } from 'inversify';
import { CommandContract } from '@Modules/Commands/CommandContract';
import { BuildFromTableDefinitionCommandContract, BuildFromTableDefinitionOptions } from '@Modules/Commands/BuildFromTableDefinitionCommand';
import { Commands } from '@Modules/Commands/Commands';

@injectable()
class API {
  /**
   * @var {interfaces.Factory<CommandContract>}
   */
  private commandFactory: interfaces.Factory<CommandContract>;

  public constructor(
    @inject('Factory<Command>') commandFactory: interfaces.Factory<CommandContract>,
  ) {
    this.commandFactory = commandFactory
  }

  /**
   * Entrypoint for generating new stubs from a table
   */
  public async buildFromTableDefintion(options: BuildFromTableDefinitionOptions): Promise<boolean> {
    const command = <BuildFromTableDefinitionCommandContract> this.commandFactory(Commands.BUILD_FROM_TABLE_DEFINITION);

    const resolvedOptions = await command.resolveOptions(options);

    console.log(resolvedOptions);

    return true;
  }
}

export { API }