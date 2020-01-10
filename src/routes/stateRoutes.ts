import * as express from 'express';

import { StateController } from '../controllers/StateController';

const stateRoutes = express.Router();

// #region
/**
 * @api {get} / Get states
 * @apiDescription Returns states
 * @apiVersion 1.0.0
 * @apiGroup State
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
stateRoutes.get('/', StateController.getStates);

stateRoutes.get('/:id', StateController.getState);

stateRoutes.post('/', StateController.insertState);

stateRoutes.put('/:id', StateController.updateState);

stateRoutes.delete('/:id', StateController.deleteState);

export { stateRoutes };
