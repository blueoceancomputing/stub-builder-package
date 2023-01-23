import { StubBuilderConfig } from "Stubber/StubBuilderConfig";

interface ApplicationConfig {
  applicationDirectory: string;
  stubBuilders: Array<StubBuilderConfig>
}

export { ApplicationConfig }