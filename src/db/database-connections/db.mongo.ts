import mongoose from 'mongoose';
import { config } from '../../helper/config';
import { logErrDetails, logInfoDetails } from '../../helper/logger';
import { MONGO_CONNECTED } from '../../constants/info-constants';

// reference
let database: mongoose.Connection;

/**
 *
 * @param label
 */
export const mongoDbConnect = (label = 'MongoDB') => {

  // if already connected and is in ready state
  if(database && database.readyState) {
    return;
  }

  const mongoDsn  = config.get(`MONGO_DSN`, '');
  const mongoOpt  = config.get(`MONGO_OPT`, { poolSize: 5, useNewUrlParser: true });
  const options   = typeof mongoOpt === 'string' ? JSON.parse(mongoOpt) : mongoOpt;

  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // it can be done with try catch without callback
  mongoose.connect(mongoDsn, options);

  // store connection reference
  database = mongoose.connection;

  // When successfully connected
  database.on('connected', function () {
    logInfoDetails({ message: `${ label } connected @ ${ mongoDsn }` });
  });

  // If the connection throws an error
  database.on('error', function (err) {
    logErrDetails({ message: `${ label } connection error @ ${ mongoDsn }`, error: err });
  });

  // When the connection is disconnected
  database.on('disconnected', function () {
    logInfoDetails({ message: `${ label } connection disconnected @ ${ mongoDsn }` });
  });
};

/**
 *
 * @returns {Promise<string|null>}
 */
export const checkHealthMongoDb = async () => {
  if(database && database.readyState) {
    return MONGO_CONNECTED;
  }

  // request new connection before leaving so next time health will have a ready connection
  mongoDbConnect('DCS');

  // returns null since connection opening might will take time in async mode
  return null;
};

/**
 * Gracefully closes the MongoDB connection
 */
export const mongoDbDisconnect = () => {
  database.close(function () {
    logInfoDetails({ message: 'Mongoose default connection disconnected through app termination' })
  });
};
