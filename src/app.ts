require('express-async-errors');
import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from  'body-parser';

// mongodb
import { mongoDbConnect } from './db/database-connections/db.mongo';

// routers file
import { router as routerHealth } from './modules/health/health.route';
import { router as routerStudent } from './modules/student/student.route';

// middle-wares
import { ConfigLoader } from './middlerwares/config.loader';
import { RouteNotFoundMiddleware } from './middlerwares/not.found';
import { ExceptionHandlerMiddleware } from './middlerwares/exception-handler';


export const app: express.Application = express();

// Connect to multiple DB's
if (process.env.NODE_ENV !== 'test') {

    // connect database
    mongoDbConnect('DCS');
}

app
  .disable('x-powered-by')
  .use(helmet()) // helmet for security purpose
  .use(morgan('tiny')) // for logging
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ limit: '5mb' }))
  .use('/', routerHealth)
  .use('/', ConfigLoader, routerStudent)
  .use(RouteNotFoundMiddleware) // RouteNotFound middle-wares must
  .use(ExceptionHandlerMiddleware); // ExceptionHandler will be the last one to be registered
;