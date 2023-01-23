import StubBuilder from "Stubber/StubBuilder";

interface ApplicationContract {
  applicationDirectory: string;
  stubBuilders: Array<StubBuilder>
}

export { ApplicationContract }