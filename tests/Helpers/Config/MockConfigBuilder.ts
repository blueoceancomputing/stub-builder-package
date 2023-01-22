import { jest } from '@jest/globals'
import { IConfig } from "config";
import { get, has, set } from "lodash";

export class MockConfigBuilder {

  private map: { [key: string]: any };

  public constructor() {
    this.map = {};
  }

  public clear(): this {
    this.map = {};
    return this;
  }

  public setConfigByPath(path: string, value: any): this {
    this.map = set(this.map, path, value);
    return this
  }

  public shouldApplyMocking(value: boolean): this {
    return this.setConfigByPath('general.applyMocking', value);
  }

  public setRequestBaseUrl(provider: string, baseUrl: string): this {
    this.setConfigByPath(`providers.${provider}.baseUrl`, baseUrl);
    return this;
  }

  public setRequestConfig(provider: string, requestKey: string, requestConfig: any): this {
    this.setConfigByPath(`providers.${provider}.requests.${requestKey}`, requestConfig);
    return this;
  }

  public build(): IConfig {
    const partial = <IConfig> jest.createMockFromModule('config')

    return {
      ...partial,
      get: <T>(path: string): T => {
        return get(this.map, path) as T;
      },
      has: (path: string): boolean => {
        return has(this.map, path);
      }
    }
  }
}