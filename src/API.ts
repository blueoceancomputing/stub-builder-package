import {
  Command as BuildFromTableDefinitionCommand,
  Options as BuildFromTableDefinitionOptions
} from '@Modules/Commands/BuildFromTableDefinitionCommand'

class API {
  /**
   * Entrypoint for generating new stubs from a table
   */
  public async buildFromTableDefintion(options: BuildFromTableDefinitionOptions): Promise<boolean> {

    return true;
  }
}

export { API }