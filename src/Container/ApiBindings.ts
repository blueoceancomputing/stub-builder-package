import { interfaces } from 'inversify';
import Types from '@Container/Types'
import Bind = interfaces.Bind;
import { API } from '../API';

module.exports = (bind: Bind) => {
  bind<API>(Types.Api).to(API)
}