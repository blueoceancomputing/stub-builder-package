import { interfaces } from 'inversify';
import Types from '@Container/Types'
import Bind = interfaces.Bind;
import config, { IConfig } from 'config';
import { API } from '../API';

module.exports = (bind: Bind) => {
  bind<IConfig>(Types.Config).toConstantValue(config);

  bind<API>(Types.Api).to(API)
}