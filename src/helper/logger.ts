/**
 *
 * @param message
 * @param error
 * @param additionalData
 */
export const logErrDetails = (
    { message = '', error = {}, additionalData = {} }: { message: string, error?: object | null | undefined, additionalData?: object }
    ) => {
  logMsg({
    level: 'ERROR',
    message,
    error,
    ...additionalData,
  });
};

/**
 *
 * @param message
 * @param additionalData
 */
export const logInfoDetails = (
    { message = '', additionalData = {} }: { message: string, additionalData?: object }
) => {
  logMsg({
    level: 'INFO',
    message,
    ...additionalData,
  });
};

/**
 *
 * @param logObj
 */
const logMsg = (logObj: object) => {
  let logObject = {
    ...logObj,
    '@ts': new Date().toISOString(),
  };
  console.log(JSON.stringify(logObject));
};
