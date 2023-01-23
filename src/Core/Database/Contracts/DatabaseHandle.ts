import { Query } from "../Query/Query";
import { QueryResult } from "../Query/QueryResult";
import { DatabaseConfig } from "./DatabaseConfig";

interface DatabaseHandle {
  /**
   * Reference to our config
   */
  readonly config: DatabaseConfig;
  
  /**
   * Runs our query and returns our results
   * 
   * @param {Query} query
   * @return {Promise<QueryResult<TEntity>>}
   */
  run<TEntity>(query: Query): Promise<QueryResult<TEntity>>;
}

export { DatabaseHandle }