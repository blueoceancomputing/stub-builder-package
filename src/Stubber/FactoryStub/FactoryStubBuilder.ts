import StubBuilder from "../StubBuilder";


class FactoryStubBuilder implements StubBuilder {
  /**
   * @var {string} templateFilePath
   */
  private templateFilePath: string = './Factory.stub';

  setCustomArguments(args: Record<string, string | number> | undefined): StubBuilder {

    return this
  }
}

export { FactoryStubBuilder }