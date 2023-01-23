import StubBuilder from "src/Stubber/StubBuilder";

interface ApplicationContract {
  applicationDirectory: string;
  stubBuilders: Array<StubBuilder>
}

export { ApplicationContract }