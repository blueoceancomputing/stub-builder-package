import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import {
  BuildFromTableDefinitionCommandContract,
  BuildFromTableDefinitionCommand,
} from './BuildFromTableDefinitionCommand'
import { Commands } from './Commands';
import { CommandContract } from './CommandContract';

module.exports = (bind: Bind) => {
  bind<interfaces.Factory<CommandContract>>('Factory<Command>')
    .toFactory((context: interfaces.Context) => {
      return (commandName: Commands) => {
        return context.container.getNamed<CommandContract>(
          Types.Command,
          commandName
        );
      };
    });

  bind<BuildFromTableDefinitionCommandContract>(Types.Command)
    .to(BuildFromTableDefinitionCommand)
    .whenTargetNamed(Commands.BUILD_FROM_TABLE_DEFINITION);
}