import { ApiProblem as ExpressApiProblem } from 'express-api-problem';
import * as HttpStatusCode from 'http-status-codes';
import { Request, Response } from "express";

/**
 * Called for any requests for which no
 * handler was found.
 * @param req
 * @param res
 * @param err
 * @constructor
 */
export const RouteNotFoundMiddleware = (req: Request, res: Response, err: any) => {
  throw new ExpressApiProblem({ status: HttpStatusCode.NOT_FOUND, title: 'Route not found,', detail: 'Route not found' });
};
