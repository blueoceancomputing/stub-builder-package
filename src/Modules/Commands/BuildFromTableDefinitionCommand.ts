import { injectable } from 'inversify';
import { CommandContract } from './CommandContract'
import {
  BuildFromDatabaseTableDefintionOptions as Options,
  BuildFromDatabaseTableDefintionResolvedOptions as ResolvedOptions,
} from './Options/BuildFromDatabaseTableDefintionOptions'

type BuildFromTableDefinitionCommandContract = CommandContract<Options, ResolvedOptions>;

@injectable()
class BuildFromTableDefinitionCommand implements CommandContract<Options, ResolvedOptions> {
  /**
   * @inheritdoc
   */
  public async resolveOptions(...options: Array<any>): Promise<ResolvedOptions> {
    return {
      
    };
  }
}

export {
  BuildFromTableDefinitionCommandContract,
  BuildFromTableDefinitionCommand,
  Options as BuildFromTableDefinitionOptions,
  ResolvedOptions as BuildFromTableDefinitionResolvedOptions
}