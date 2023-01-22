class DatabaseDialectNotFoundException extends Error {
  /**
   * @param {string | undefined} dialectName 
   */
  public constructor(dialectName: string) {
    super(`The following database dialect "${dialectName}" is not registered`)
  }
}

export { DatabaseDialectNotFoundException }