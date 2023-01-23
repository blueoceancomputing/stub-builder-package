import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import { DataTypeTransformer } from './DataTypeTransformer';
import { RelationshipTransformer } from './RelationshipTransformer';


module.exports = (bind: Bind) => {
  bind<DataTypeTransformer>(Types.DataTypeTransformer).to(DataTypeTransformer);
  bind<RelationshipTransformer>(Types.RelationshipTransformer).to(RelationshipTransformer);
}