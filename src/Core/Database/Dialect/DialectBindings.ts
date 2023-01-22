import { interfaces } from 'inversify';
import Bind = interfaces.Bind
import { DialectContract } from './DialectContract'
import Types from '@Container/Types';
import { DatabaseDialectNotFoundException } from '@Core/Exceptions/DatabaseDialectNotFoundException';
import { MysqlDialect } from './Mysql/MysqlDialect';
import { Dialects } from './Dialects';

module.exports = (bind: Bind) => {
  bind<interfaces.Factory<DialectContract>>('Factory<DatabaseDialect>')
    .toFactory((context: interfaces.Context) => {
      return (dialectName: string) => {
        if (!context.container.isBoundNamed(Types.DatabaseDialect, dialectName)) {
          throw new DatabaseDialectNotFoundException(dialectName)
        }

        return context.container.getNamed<DialectContract>(
          Types.DatabaseDialect,
          dialectName
        );
      };
    });

  bind<DialectContract>(Types.DatabaseDialect)
    .to(MysqlDialect)
    .whenTargetNamed(Dialects.MYSQL)
}