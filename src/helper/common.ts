const fs = require('fs');
const path = require('path');

export const common = {

  /**
   * Check if path exists or not
   *
   * @param {string} filePath
   * @returns {boolean}
   */
  isPathExist: (filePath: string): boolean => {
    return fs.existsSync(path.resolve(__dirname, filePath));
  },

  /**
   * @param arg
   * @returns {boolean}
   */
  isEmpty: (arg: any) : boolean => {
    let val = arg;
    if (typeof val === 'number') {
      val = arg.toString();
    }
    return !val || val === 0 || val.length === 0 || Object.keys(val).length === 0;
  },

  /**
   * usage: __.stringFormat("{0}, {1}", ["Hello", "World"])
   * @param value
   * @param paramsArr
   * @returns {string|void|never}
   */
  stringFormat: (value: any, paramsArr: Array<any>) => value.replace(/{(\d+)}/g, (match: any, number: any) => (typeof paramsArr[number] !== 'undefined' ? paramsArr[number] : match)),
};
