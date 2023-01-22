import { describe, expect, it, beforeEach } from '@jest/globals'
import { DatabaseFactory } from "@Core/Database/DatabaseFactory";
import { DatabaseNotFoundException } from "@Core/Exceptions/DatabaseNotFoundException";
import { MockConfigBuilder } from '../../../Helpers/Config/MockConfigBuilder'
import "reflect-metadata";

const mockConfigBuilder = new MockConfigBuilder();

describe('Core/Database/DatabaseFactory', () => {
  beforeEach(() => {
    mockConfigBuilder.clear();
  })

  it('should throw DatabaseNotFoundException when database does not exist in config', async () => {
    const databaseName = 'test'; // @todo replace with faker
    const config = mockConfigBuilder.build();
    const databaseFactory = new DatabaseFactory(config);

    expect(() => {
      databaseFactory.make(databaseName)
    }).toThrow(DatabaseNotFoundException)
  })
});