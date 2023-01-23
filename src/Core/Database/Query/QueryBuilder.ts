import { Query } from './Query';

interface QueryBuilder {
  /**
   * Build a new query
   *
   * @returns {Query}
   */
  build(): Query;
}

export { QueryBuilder };