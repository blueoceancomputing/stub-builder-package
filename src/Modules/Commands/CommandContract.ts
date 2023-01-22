interface CommandContract<TInputOptions = {}, TResolvedOptions = TInputOptions> {
  /**
   * Resolves our input arguments that are being passed though
   * Will throw an Exception if failed to resolve our options
   * 
   * @param {Array<unknown>} options
   * @return {Promise<TResolvedOptions>}
   * @throws {OptionValidationException}
   */
   resolveOptions(...options: Array<unknown>): Promise<TResolvedOptions>
}

export { CommandContract }