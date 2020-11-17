import { ApiProblem as ExpressApiProblem } from 'express-api-problem';
import * as HttpStatusCode from 'http-status-codes';
import { Request, Response, NextFunction } from "express";

/**
 * for authorization layer
 * @param req
 * @param res
 * @param next
 * @constructor
 */
export const ConfigLoader = (req: Request, res: Response, next: NextFunction) => {

    res.header({
        'x-connection-id': 'abcdefghijklmnopqrstuvwxzy' // just an example to set key in the header
    });

    // If key is provided then check for its configuration
    if (req.headers['x-api-key'] && req.headers['x-api-key'] !== 'test-authorization-key') {
        throw new ExpressApiProblem({ status: HttpStatusCode.FORBIDDEN, title: 'Unauthorized', detail: 'Invalid apiKey received' });
    }

    next();
};
