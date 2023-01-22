class ApplicationNotFoundException extends Error {
  /**
   * @param {string | undefined} messsage 
   */
  public constructor(applicationName: string) {
    super(`The following application "${applicationName}" is not registered`)
  }
}

export { ApplicationNotFoundException }