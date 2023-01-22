class OptionValidationException extends Error {
  /**
   * @var {string}
   */
  public static DEFAULT_MESSAGE = ''

  /**
   * @param {string | undefined} messsage 
   */
  public constructor(messsage?: string) {
    super(messsage ?? OptionValidationException.DEFAULT_MESSAGE)
  }
}

export { OptionValidationException }