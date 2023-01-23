interface Matcher<TInput, TOutput> {
  /**
   * Can we successfully match this input?
   * 
   * @param {TInput} input 
   * @returns {boolean}
   */
  match(input: TInput): boolean;

  /**
   * Processes the input into an output
   * 
   * @param {TInput} input
   * @return {TOutput}
   */
  process(input: TInput): TOutput;
}

export { Matcher }