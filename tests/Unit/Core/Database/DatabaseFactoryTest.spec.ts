import { describe, expect, it, beforeEach } from '@jest/globals'
import { DatabaseFactory } from "@Core/Database/DatabaseFactory";
import { DatabaseNotFoundException } from "@Core/Exceptions/DatabaseNotFoundException";
import { DatabaseDialectNotFoundException } from "@Core/Exceptions/DatabaseDialectNotFoundException";
import { MockConfigBuilder } from '../../../Helpers/Config/MockConfigBuilder'
import { DatabaseConfig } from '@Core/Database/Contracts/DatabaseConfig';
import { Dialects } from '@Core/Database/Dialect/Dialects';
import { DialectContract } from '@Core/Database/Dialect/DialectContract';
import { interfaces } from 'inversify';
import container from '@Container/Container';

const mockConfigBuilder = new MockConfigBuilder();
const dialectFactory = container.get<interfaces.Factory<DialectContract>>('Factory<DatabaseDialect>');

describe('Core/Database/DatabaseFactory', () => {
  beforeEach(() => {
    mockConfigBuilder.clear();
  })

  it('should throw DatabaseNotFoundException when database does not exist in config', async () => {
    const databaseName = 'test'; // @todo replace with faker
    const config = mockConfigBuilder.build();
    const databaseFactory = new DatabaseFactory(config, dialectFactory);

    expect(() => {
      databaseFactory.make(databaseName)
    }).toThrow(DatabaseNotFoundException)
  })

  it('should throw DatabaseDialectNotFoundException when dialect has not been binded', async () => {
    const databaseDialect = 'UNKNOWN';
    const databaseName = 'test'; // @todo replace with faker
    addDatabaseConfig(databaseDialect, databaseName)
    const config = mockConfigBuilder.build();
    const databaseFactory = new DatabaseFactory(config, dialectFactory);

    expect(() => {
      databaseFactory.make(databaseName)
    }).toThrow(DatabaseDialectNotFoundException)
  })

  it('should resolve the database config when is valid', async () => {
    const databaseDialect = Dialects.MYSQL
    const databaseName = 'test'; // @todo replace with faker
    addDatabaseConfig(databaseDialect, databaseName)
    const config = mockConfigBuilder.build();
    const databaseFactory = new DatabaseFactory(config, dialectFactory);

    const database = databaseFactory.make(databaseName)

    expect(database).toHaveProperty('dialect');
    expect(database).toHaveProperty('config');
  })
});

const addDatabaseConfig = (dialect: string, databaseName: string): void => {
  const databaseConfigKey = `databases.${databaseName}`;
  const config = makeMockDatabaseConfig(dialect);
  mockConfigBuilder.setConfigByPath(databaseConfigKey, config);
}

/**
 * Build our database config
 * 
 * @todo Shift values to faker
 * 
 * @param {string} dialect 
 * @returns {DatabaseConfig}
 */
const makeMockDatabaseConfig = (dialect: string): DatabaseConfig => {
  return {
    dialect,
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'huboo',
      password: 'secret',
      multipleStatements: true
    }
  }
}