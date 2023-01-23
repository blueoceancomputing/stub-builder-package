import { interfaces } from 'inversify';
import Types from '@Container/Types'
import Bind = interfaces.Bind;
import { ApplicationContract } from '@Applications/ApplicationContract';
import { HubseederApplication } from './Defintions/HubseederApplication';
import { Applications } from './Applications';
import { ApplicationNotFoundException } from '@Core/Exceptions/ApplicationNotFoundException';

module.exports = (bind: Bind) => {
  bind<interfaces.Factory<ApplicationContract>>('Factory<Application>')
    .toFactory((context: interfaces.Context) => {
      return (applicationName: string) => {
        if (!context.container.isBoundNamed(Types.Application, applicationName)) {
          throw new ApplicationNotFoundException(applicationName)
        }

        return context.container.getNamed<ApplicationContract>(
          Types.Application,
          applicationName
        );
      };
    });

  bind<ApplicationContract>(Types.Application)
    .to(HubseederApplication)
    .whenTargetNamed(Applications.HUBSEEDER)
}

