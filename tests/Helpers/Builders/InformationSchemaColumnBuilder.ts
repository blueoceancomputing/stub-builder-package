import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { InformationSchemaColumnFactory as makeColumn } from "../Factories/InformationSchemaColumnFactory";
import { TinyintInformationSchemaColumnFactory as makeTinyintColumn } from "../Factories/TinyintInformationSchemaColumnFactory";

class InformationSchemaColumnBuilder {
  /**
   * @var {Partial<InformationSchemaColumn>}
   */
  private overrides: Partial<InformationSchemaColumn> = {};

  /**
   * Clears the internal state
   * 
   * @returns {this}
   */
  public clear(): this {
    this.overrides = {}

    return this;
  }

  /**
   * Set a single key with a given value
   * 
   * @param {} key
   * @param value 
   * @returns {this}
   */
  public setValue(key: string, value: InformationSchemaColumn[keyof InformationSchemaColumn]): this {
    this.overrides[key] = value;

    return this;
  }

  /**
   * Sets up a tiny int definition
   * 
   * @returns {this}
   */
  public setTinyInt(): this {
    const tinyInt = makeTinyintColumn();
    this.overrides = tinyInt;

    return this;
  }

  /**
   * Builds our InformationSchemaColumn
   * 
   * @returns {InformationSchemaColumn}
   */
  public build(): InformationSchemaColumn {
    return makeColumn(this.overrides);
  }
}

export { InformationSchemaColumnBuilder }