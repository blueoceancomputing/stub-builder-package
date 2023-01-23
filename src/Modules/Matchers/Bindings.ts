import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import { BooleanDataTypeMatcher } from './DataTypes/BooleanDataTypeMatcher';
import { JsonDataTypeMatcher } from './DataTypes/JsonDataTypeMatcher';
import { StringDataTypeMatcher } from './DataTypes/StringDataTypeMatcher';
import { DataTypeMatcher } from './DataTypes/DataTypeMatcher';
import { IntegerDataTypeMatcher } from './DataTypes/IntegerDataTypeMatcher';
import { FixedPointDataTypeMatcher } from './DataTypes/FixedPointDataTypeMatcher';
import { FloatingPointDataTypeMatcher } from './DataTypes/FloatingPointDataTypeMatcher';
import { DateTimeDataTypeMatcher } from './DataTypes/DateTimeDataTypeMatcher';

module.exports = (bind: Bind) => {

  // Data type matchers
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(BooleanDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(JsonDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(StringDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(IntegerDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(FixedPointDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(FloatingPointDataTypeMatcher);
  bind<DataTypeMatcher>(Types.DataTypeMatcher).to(DateTimeDataTypeMatcher);
}