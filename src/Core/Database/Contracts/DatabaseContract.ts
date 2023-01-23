import { DialectContract } from "../Dialect/DialectContract";
import { DatabaseConfig } from "./DatabaseConfig";

interface DatabaseContract {
  dialect: DialectContract;
  config: DatabaseConfig;
}

export { DatabaseContract }