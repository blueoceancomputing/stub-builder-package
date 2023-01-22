import { interfaces } from 'inversify';
import Types from '@Container/Types'
import Bind = interfaces.Bind

module.exports = (bind: Bind) => {
  require('./Dialect/DialectBindings')(bind)
}