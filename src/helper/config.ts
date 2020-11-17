const get = require('lodash/get');
import { common } from "./common";

let loadedConfig: object = {};

export class config {

  /**
   * Read the configuration from the config file.
   * @example  config.get('REDIS_HOST', '127.0.0.1');
   * @param targetConfig
   * @param defaultValue
   */
  static get(targetConfig: string, defaultValue: any) : any {
    const envVariable = get(process.env, targetConfig);
    /**
     * if it's in env
     */
    if (envVariable !== undefined) {
      return envVariable;
    }

    /**
     * if it's already loaded
     */
    if (Object.keys(loadedConfig).length) {
      return (<any>loadedConfig)[targetConfig] || defaultValue;
    }

    let configPath = './../../.config.json';
    let configOverridePath = './../../.config.override.json';

    if (!common.isPathExist(configPath)) {
      throw new Error('.config.json file is missing');
    }

    let configJson = require(configPath);
    let configOverride = common.isPathExist(configOverridePath) ? require(configOverridePath) : {};

    loadedConfig = { ...configJson, ...configOverride };

    return (<any>loadedConfig)[targetConfig] || defaultValue;
  }
}
