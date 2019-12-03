import { getLogger } from 'log4js';

import app from './app';
import { Database } from './db';

const logger = getLogger('server.ts');

Database.initialize();

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  logger.info('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  logger.info('Press CTRL-C to stop\n');
});
