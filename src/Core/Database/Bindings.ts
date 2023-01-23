import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind
import { DatabaseFactory } from './DatabaseFactory';

module.exports = (bind: Bind) => {
  require('./Dialect/DialectBindings')(bind)

  bind<DatabaseFactory>(Types.DatabaseFactory).to(DatabaseFactory)
}