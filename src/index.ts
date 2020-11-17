
// lib/app.ts
import { app } from './app';
import { config } from './helper/config';
import { handleExit, handleUncaughtErrors } from './helper/fatal';
import { logInfoDetails, logErrDetails } from './helper/logger';

(async function() {
    try {

        // unhandled exceptions
        handleUncaughtErrors();
        handleExit();

        // setting up server
        const APP_PORT  = config.get('NODE_PORT', 3000);

        // server listening
        app.listen(APP_PORT, function () {
            logInfoDetails({message: `Express TS boilerplate app listening on port:${APP_PORT}`});
        });

    } catch (err) {

        logErrDetails({ message: 'Express boilerplate server setup failed', error: err });
        process.exit(1);
    }
})();