import { DatabaseConfig } from "./DatabaseConfig";
import { DatabaseHandle } from "./DatabaseHandle";

interface DatabaseHandleFactory {
  /**
   * Instantiate a new handle to the database
   * 
   * @param {DatabaseConfig} config
   * @returns {DatabaseHandle}
   */
  make(config: DatabaseConfig): DatabaseHandle
}

export { DatabaseHandleFactory }