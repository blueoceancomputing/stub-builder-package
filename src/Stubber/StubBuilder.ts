import { StubBuilderConfig } from "./StubBuilderConfig";

interface StubBuilder {
  setCustomArguments(args: StubBuilderConfig['arguments']): StubBuilder;
}

export default StubBuilder