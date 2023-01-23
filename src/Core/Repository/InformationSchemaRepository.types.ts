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