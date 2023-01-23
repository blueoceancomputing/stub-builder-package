import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import { DataTypeTransformer } from './DataTypeTransformer';
import { RelationshipTransformer } from './RelationshipTransformer';
import { ColumnTransformer } from './ColumnTransformer';

module.exports = (bind: Bind) => {
  bind<ColumnTransformer>(Types.ColumnTransformer).to(ColumnTransformer);
  bind<DataTypeTransformer>(Types.DataTypeTransformer).to(DataTypeTransformer);
  bind<RelationshipTransformer>(Types.RelationshipTransformer).to(RelationshipTransformer);
}