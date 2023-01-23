import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import { TableProcessor } from './TableProcessor';

module.exports = (bind: Bind) => {
  bind<TableProcessor>(Types.TableProcessor).to(TableProcessor);
}