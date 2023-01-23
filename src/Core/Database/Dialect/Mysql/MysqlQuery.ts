import { Query } from "@Core/Database/Query/Query";

class MysqlQuery implements Query {
  /**
   * @member {any} values
   */
  private readonly values: any;

  /**
   * @member {string} sql
   */
  private readonly sql: string;

  /**
   * Create a new query
   *
   * @param {string} sql
   * @param {any} values
   */
  public constructor(sql: string, values?: any) {
    this.sql = sql;
    this.values = values ?? [];
  }

  /**
   * Get the SQL for the query
   *
   * @returns {string}
   */
  public getSql(): string {
    return this.sql;
  }

  /**
   * Get the values for the query
   *
   * @returns {any}
   */
  public getValues(): any {
    return this.values;
  }
}

export { MysqlQuery }