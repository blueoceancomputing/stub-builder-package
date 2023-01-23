import { interfaces } from 'inversify';
import Bind = interfaces.Bind
import Types from '@Container/Types';
import { DatabaseDialectNotFoundException } from '@Core/Exceptions/DatabaseDialectNotFoundException';
import { Dialects } from './Dialects';
import { DialectContract } from './DialectContract'
import { DatabaseHandleFactory } from '../Contracts/DatabaseHandleFactory';
import { MysqlDialect } from './Mysql/MysqlDialect';
import { MysqlDatabaseHandleFactory } from './Mysql/MysqlDatabaseHandleFactory';

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

  bind<interfaces.Factory<DatabaseHandleFactory>>('Factory<DatabaseHandleFactory>')
    .toFactory((context: interfaces.Context) => {
      return (dialectName: string) => {
        if (!context.container.isBoundNamed(Types.DatabaseHandleFactory, dialectName)) {
          throw new DatabaseDialectNotFoundException(dialectName)
        }

        return context.container.getNamed<DatabaseHandleFactory>(
          Types.DatabaseHandleFactory,
          dialectName
        );
      };
    });

  /**
   * MySQL
   */
  bind<DialectContract>(Types.DatabaseDialect)
    .to(MysqlDialect)
    .whenTargetNamed(Dialects.MYSQL)
  bind<DatabaseHandleFactory>(Types.DatabaseHandleFactory)
    .to(MysqlDatabaseHandleFactory)
    .whenTargetNamed(Dialects.MYSQL)
}