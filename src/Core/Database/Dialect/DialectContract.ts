import { DatabaseConfig } from "../Contracts/DatabaseConfig";
import { DatabaseHandle } from "../Contracts/DatabaseHandle";

interface DialectContract {
  /**
   * Connects and instatiates a handle to the database
   * 
   * @param {DatabaseConfig} config
   * @return {Promise<DatabaseHandle>}
   */
  connect(config: DatabaseConfig): Promise<DatabaseHandle>;
}

export { DialectContract }