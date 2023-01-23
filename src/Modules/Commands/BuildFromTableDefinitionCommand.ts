import { inject, injectable, interfaces } from 'inversify';
import { ApplicationContract } from 'Applications/ApplicationContract';
import { CommandContract } from './CommandContract'
import {
  BuildFromDatabaseTableDefintionOptions as Options,
  BuildFromDatabaseTableDefintionResolvedOptions as ResolvedOptions,
} from './Options/BuildFromDatabaseTableDefintionOptions'

type BuildFromTableDefinitionCommandContract = CommandContract<Options, ResolvedOptions>;

@injectable()
class BuildFromTableDefinitionCommand implements CommandContract<Options, ResolvedOptions> {
  // /**
  //  * @var {interfaces.Factory<ApplicationContract>}
  //  */
  // private applicationFactory: interfaces.Factory<ApplicationContract>;

  // public constructor(
  //   @inject('Factory<Application>') applicationFactory: interfaces.Factory<ApplicationContract>,
  // ) {
  //   this.applicationFactory = applicationFactory
  // }

  /**
   * @inheritdoc
   */
  public async resolveOptions(options: Options): Promise<ResolvedOptions> {
    return {
      // application: <ApplicationContract> this.applicationFactory(options.application)
    };
  }
}

export {
  BuildFromTableDefinitionCommandContract,
  BuildFromTableDefinitionCommand,
  Options as BuildFromTableDefinitionOptions,
  ResolvedOptions as BuildFromTableDefinitionResolvedOptions
}