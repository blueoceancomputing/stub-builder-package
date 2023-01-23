import { Dictionary } from "./types";

export interface InformationSchemaTable extends Dictionary {
  TABLE_CATALOG: string | null;
  TABLE_SCHEMA: string | null;
  TABLE_NAME: string | null;
  TABLE_TYPE: string; /** @todo look at making enum: enum('BASE TABLE','VIEW','SYSTEM VIEW') */
  ENGINE: string | null;
  VERSION: number | null;
  ROW_FORMAT: string | null; /** @todo look at making enum: enum('Fixed','Dynamic','Compressed','Redundant','Compact','Paged') */
  TABLE_ROWS: number | null;
  AVG_ROW_LENGTH: number | null;
  DATA_LENGTH: number | null;
  MAX_DATA_LENGTH: number | null;
  INDEX_LENGTH: number | null;
  DATA_FREE: number | null;
  CREATE_TIME: number;
  UPDATE_TIME: string | null;
  CHECK_TIME: string | null;
  TABLE_COLLATION: string | null;
  CHECKSUM: number | null;
  CREATE_OPTIONS: string | null;
  TABLE_COMMENT: string | null;
}

export interface InformationSchemaColumn extends Dictionary {
  TABLE_CATALOG: string | null;
  TABLE_SCHEMA: string | null;
  TABLE_NAME: string | null;
  COLUMN_NAME: string | null;
  ORDINAL_POSITION: number | null;
  COLUMN_DEFAULT: string | null;
  IS_NULLABLE: string;
  DATA_TYPE: string | null;
  CHARACTER_MAXIMUM_LENGTH: number | null;
  CHARACTER_OCTET_LENGTH: number | null;
  NUMERIC_PRECISION: number | null;
  NUMERIC_SCALE: number | null;
  DATETIME_PRECISION: number | null;
  CHARACTER_SET_NAME: string | null;
  COLLATION_NAME: string | null;
  COLUMN_TYPE: string;
  COLUMN_KEY: string; /** @todo look at making enum: enum('','PRI','UNI','MUL') */
  EXTRA: string | null;
  PRIVILEGES: string | null;
  COLUMN_COMMENT: string;
  GENERATION_EXPRESSION: string;
  SRS_ID: number | null;
}

export interface InformationSchemaKeyColumnUsage extends Dictionary {
  CONSTRAINT_CATALOG: string | null;
  CONSTRAINT_SCHEMA: string | null;
  CONSTRAINT_NAME: string | null;
  TABLE_CATALOG: string | null;
  TABLE_SCHEMA: string | null;
  TABLE_NAME: string | null;
  COLUMN_NAME: string | null;
  ORDINAL_POSITION: number;
  POSITION_IN_UNIQUE_CONSTRAINT: number | null;
  REFERENCED_TABLE_SCHEMA: string | null;
  REFERENCED_TABLE_NAME: string | null;
  REFERENCED_COLUMN_NAME: string | null;
}