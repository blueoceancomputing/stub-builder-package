import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { FactoryContract } from "./FactoryContract";

const InformationSchemaColumnFactory: FactoryContract<InformationSchemaColumn> = (overrides: Partial<InformationSchemaColumn> = {}): InformationSchemaColumn => {
  const generated: InformationSchemaColumn = {
    constructor: {
      name: 'RowDataPacket'
    },
    TABLE_CATALOG: "def",
    TABLE_SCHEMA: "huboo",
    TABLE_NAME: "channel_credentials",
    COLUMN_NAME: "active",
    ORDINAL_POSITION: 24,
    COLUMN_DEFAULT: "1",
    IS_NULLABLE: "NO",
    DATA_TYPE: "tinyint",
    CHARACTER_MAXIMUM_LENGTH: null,
    CHARACTER_OCTET_LENGTH: null,
    NUMERIC_PRECISION: 3,
    NUMERIC_SCALE: 0,
    DATETIME_PRECISION: null,
    CHARACTER_SET_NAME: null,
    COLLATION_NAME: null,
    COLUMN_TYPE: "tinyint(1)",
    COLUMN_KEY: "",
    EXTRA: "",
    PRIVILEGES: "select,insert,update,references",
    COLUMN_COMMENT: "",
    GENERATION_EXPRESSION: "",
    SRS_ID: null
  }

  return { ...generated, ...overrides }
}

export { InformationSchemaColumnFactory }