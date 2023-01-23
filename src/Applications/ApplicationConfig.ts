import { StubBuilderConfig } from "src/Stubber/StubBuilderConfig";

interface ApplicationConfig {
  applicationDirectory: string;
  stubBuilders: Array<StubBuilderConfig>
}

export { ApplicationConfig }