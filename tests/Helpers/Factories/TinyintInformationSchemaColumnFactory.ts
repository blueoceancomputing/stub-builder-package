import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { FactoryContract } from "./FactoryContract";
import { InformationSchemaColumnFactory as makeInformationSchemaColumn } from "./InformationSchemaColumnFactory";

const TinyintInformationSchemaColumnFactory: FactoryContract<InformationSchemaColumn> = (overrides?: Partial<InformationSchemaColumn>) => {
  const tinyIntOverrides: Partial<InformationSchemaColumn> = {
    constructor: {
      name: 'RowDataPacket'
    },
    TABLE_CATALOG: "def",
    COLUMN_DEFAULT: "1",
    IS_NULLABLE: "NO",
    DATA_TYPE: "tinyint",
    CHARACTER_MAXIMUM_LENGTH: null,
    CHARACTER_OCTET_LENGTH: null,
    NUMERIC_PRECISION: 3,
    NUMERIC_SCALE: 0,
    COLUMN_TYPE: "tinyint(1)",  // @tood randomise
    PRIVILEGES: "select,insert,update,references",
  }
  
  return makeInformationSchemaColumn({ ...tinyIntOverrides, ...overrides ?? {} });
}

export { TinyintInformationSchemaColumnFactory }