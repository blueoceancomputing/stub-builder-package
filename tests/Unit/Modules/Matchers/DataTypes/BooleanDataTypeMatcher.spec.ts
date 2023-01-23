import { describe, expect, it, beforeEach } from '@jest/globals'
import { InformationSchemaColumnBuilder } from "../../../../Helpers/Builders/InformationSchemaColumnBuilder";
import { BooleanDataTypeMatcher } from 'Modules/Matchers/DataTypes/BooleanDataTypeMatcher'
import { BooleanDataType } from 'Modules/Entities/DataTypes/BooleanDataType'

const informationSchemaColumnBuilder = new InformationSchemaColumnBuilder();

describe('Modules/Matchers/DataTypes/BooleanDataTypeMatcher', () => {
  beforeEach(() => {
    informationSchemaColumnBuilder.clear();
  })

  it('should not match column that do not have a DATA_TYPE of "tinyint"', async () => {
    const informationSchemaColumn = informationSchemaColumnBuilder
        .setValue('DATA_TYPE', 'not_tiny_int')
        .build();
    const matcher = new BooleanDataTypeMatcher()

    const result = matcher.match(informationSchemaColumn)

    expect(result).toEqual(false)
  })

  it('should match column that does have a DATA_TYPE of "tinyint"', async () => {
    const informationSchemaColumn = informationSchemaColumnBuilder
        .setTinyInt()
        .build();
    const matcher = new BooleanDataTypeMatcher()

    const result = matcher.match(informationSchemaColumn)

    expect(result).toEqual(true)
  })

  it('should construct a BooleanDataType on process of a valid tinyint', async () => {
    const informationSchemaColumn = informationSchemaColumnBuilder
        .setTinyInt()
        .build();
    const matcher = new BooleanDataTypeMatcher()

    const result = matcher.process(informationSchemaColumn)

    expect(result).toBeInstanceOf(BooleanDataType)
  })
});