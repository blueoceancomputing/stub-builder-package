import { injectable } from "inversify";
import StubBuilder from "../StubBuilder";

@injectable()
class FactoryStubBuilder implements StubBuilder {
  /**
   * @var {string} templateFilePath
   */
  private templateFilePath: string = './Factory.stub';

  /**
   * Set custom arguments for the stub builder
   * 
   * @param {Record<string, string | number> | undefined} args
   * @returns {this}
   */
  public setCustomArguments(args: Record<string, string | number> | undefined): this {

    return this
  }
}

export { FactoryStubBuilder }