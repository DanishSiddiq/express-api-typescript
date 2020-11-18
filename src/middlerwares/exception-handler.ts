import { ApiProblem as ExpressApiProblem } from 'express-api-problem';
import { Request, Response, NextFunction } from "express";
import * as HttpStatusCode from 'http-status-codes';
import { logErrDetails } from '../helper/logger';
import { common } from "../helper/common";

/**
 * Intercepts the exceptions and logs them if required
 * @param err
 * @param req
 * @param res
 * @param next
 * @return {module.exports}
 * @constructor
 */
export const ExceptionHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {

  // Continue if it is not an error
  if (!(err instanceof ExpressApiProblem) && !(err instanceof Error)) {
    return next();
  }

  let additionalData;
  if (!(err instanceof ExpressApiProblem)) {
    additionalData = {
      httpStatus: (<ExpressApiProblem>err)['status'] || HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: (<ExpressApiProblem>err)['detail'] || 'Error',
      requestUrl: req.originalUrl,
    };
  } else {
    additionalData = {
      httpStatus: err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: err.message || 'Error',
      requestUrl: req.originalUrl
    };
  }

  // final response
  const formattedResponse = {
    ...additionalData,
    connectionId: res.getHeader('x-connection-id'),
    ...err
  };

  // log error
  logErrDetails({ message: 'Error handled in middleware' , error: err, additionalData });

  return res.status(additionalData.httpStatus).json(formattedResponse);
};
