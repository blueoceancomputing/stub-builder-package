import { inject, injectable, interfaces } from "inversify";
import StubBuilder from "./StubBuilder";
import { StubBuilderConfig } from "./StubBuilderConfig";

@injectable()
class StubBuilderFactory {
  /**
   * @var {interfaces.Factory<StubBuilder>} stubBuilderFactory
   */
  private stubBuilderFactory: interfaces.Factory<StubBuilder>;

  public constructor (
    @inject('Factory<StubBuilder>') stubBuilderFactory: interfaces.Factory<StubBuilder>
  ) {
    this.stubBuilderFactory = stubBuilderFactory;
  }

  /**
   * Make the stub builder
   * 
   * @param {StubBuilderConfig} config
   * @returns {StubBuilder}
   */
  public make(config: StubBuilderConfig): StubBuilder {
    const stubBuilder = <StubBuilder> this.stubBuilderFactory(config);
    return stubBuilder.setCustomArguments(config.arguments ?? {});
  }
}

export { StubBuilderFactory }