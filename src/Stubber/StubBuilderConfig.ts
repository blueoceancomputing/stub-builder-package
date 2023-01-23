interface StubBuilderConfig {
  /**
   * The type of stub builder to instatiate
   * 
   * @var {string}
   */
  type: string;

  /**
   * Overriding arguments
   * 
   * @var {Record<string, string | number> | undefined}
   */
  arguments?: Record<string, string | number> | undefined;
}

export { StubBuilderConfig }