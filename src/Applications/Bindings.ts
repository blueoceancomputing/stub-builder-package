import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import { ApplicationFactory } from './ApplicationFactory';

module.exports = (bind: Bind) => {
  bind<ApplicationFactory>(Types.ApplicationFactory).to(ApplicationFactory);
}
