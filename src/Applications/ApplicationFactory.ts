import { IConfig } from "config";
import Types from "Container/Types";
import { inject, injectable } from "inversify";
import StubBuilder from "Stubber/StubBuilder";
import { StubBuilderConfig } from "Stubber/StubBuilderConfig";
import { StubBuilderFactory } from "Stubber/StubBuilderFactory";
import { ApplicationConfig } from "./ApplicationConfig";
import { ApplicationContract } from "./ApplicationContract";

@injectable()
class ApplicationFactory {
  /**
   * @var {IConfig} configReader
   */
  private configReader: IConfig;

  /**
   * @var {StubBuilderFactory} stubBuilderFactory
   */
  private stubBuilderFactory: StubBuilderFactory

  public constructor (
    @inject(Types.Config) configReader: IConfig,
    @inject(Types.StubBuilderFactory) stubBuilderFactory: StubBuilderFactory
  ) {
    this.configReader = configReader;
    this.stubBuilderFactory = stubBuilderFactory;
  }

  /**
   * Make the application
   * 
   * @param {string} applicationName
   * @returns {ApplicationContract}
   */
  public make(applicationName: string): ApplicationContract {
    const configKey = `applications.${applicationName}`
    if (!this.configReader.has(configKey)) {
      throw new Error('Application no registered in the config');
    }

    const applicationConfig = this.configReader.get<ApplicationConfig>(`applications.${applicationName}`);
    return {
      applicationDirectory: applicationConfig.applicationDirectory,
      stubBuilders: applicationConfig.stubBuilders.map(
        (config) => this.buildStubBuilder(config)
      )
    }
  }

  /**
   * Builds all the stub builders
   * 
   * @param {StubBuilderConfig} stubBuilderConfig
   * @returns {StubBuilder}
   */
  private buildStubBuilder(stubBuilderConfig: StubBuilderConfig): StubBuilder {
    return this.stubBuilderFactory.make(stubBuilderConfig)
  }
}

export { ApplicationFactory }