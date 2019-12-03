import * as express from 'express';

import { DrugController } from '../controllers/DrugController';

const drugRoutes = express.Router();

// #region
/**
 * @api {get} / Get drugs
 * @apiDescription Returns drugs
 * @apiVersion 1.0.0
 * @apiGroup Drug
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
drugRoutes.get('/', DrugController.getDrugs);
drugRoutes.get('/:id', DrugController.getDrug);

drugRoutes.post('/', DrugController.insertDrug);

drugRoutes.put('/:id', DrugController.updateDrug);

drugRoutes.delete('/:id', DrugController.deleteDrug);

export { drugRoutes };
