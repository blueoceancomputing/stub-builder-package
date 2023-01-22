class DatabaseNotFoundException extends Error {
  /**
   * @param {string | undefined} databaseName 
   */
  public constructor(databaseName: string) {
    super(`The following database "${databaseName}" is not registered`)
  }
}

export { DatabaseNotFoundException }