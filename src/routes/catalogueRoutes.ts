import { Router } from 'express';

import { CatalogueController } from '../controllers/CatalogueController';

const catalogueRoutes = Router();

// #region
/**
 * @api {get} / Get catalouges
 * @apiDescription Returns catalouges
 * @apiVersion 1.0.0
 * @apiGroup Catalogue
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
catalogueRoutes.get('/', CatalogueController.getCatalogues);
catalogueRoutes.get('/:id', CatalogueController.getCatalogue);

catalogueRoutes.post('/', CatalogueController.insertCatalogue);

catalogueRoutes.put('/:id', CatalogueController.updateCatalogue);

catalogueRoutes.delete('/:id', CatalogueController.deleteCatalogue);

export { catalogueRoutes };
