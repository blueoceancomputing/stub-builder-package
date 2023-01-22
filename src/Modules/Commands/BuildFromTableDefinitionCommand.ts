import { CommandContract } from './CommandContract'
import {
  BuildFromDatabaseTableDefintionOptions as Options,
  BuildFromDatabaseTableDefintionResolvedOptions as ResolvedOptions,
} from './Options/BuildFromDatabaseTableDefintionOptions'

class BuildFromTableDefinitionCommand implements CommandContract<Options, ResolvedOptions> {
  /**
   * @inheritdoc
   */
  public async resolveOptions(...options: Array<any>): Promise<ResolvedOptions> {
    return {};
  }

}

export {
  BuildFromTableDefinitionCommand as Command,
  Options,
  ResolvedOptions
}