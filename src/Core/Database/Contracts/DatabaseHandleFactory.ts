import { DatabaseConfig } from "./DatabaseConfig";
import { DatabaseHandle } from "./DatabaseHandle";

interface DatabaseHandleFactory {
  /**
   * Instantiate a new handle to the database
   * 
   * @param {DatabaseConfig} config
   * @returns {Promise<DatabaseHandle>}
   */
  make(config: DatabaseConfig): Promise<DatabaseHandle>
}

export { DatabaseHandleFactory }