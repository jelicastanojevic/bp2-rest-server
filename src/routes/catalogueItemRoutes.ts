import { Router } from 'express';

import { CatalogueItemController } from '../controllers/CatalogueItemController';

const catalogueItemRoutes = Router();

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
catalogueItemRoutes.get('/', CatalogueItemController.getCatalogueItems);
catalogueItemRoutes.get('/:id', CatalogueItemController.getCatalogueItem);

catalogueItemRoutes.post('/', CatalogueItemController.insertCatalogueItem);

catalogueItemRoutes.put('/:id', CatalogueItemController.updateCatalogueItem);

catalogueItemRoutes.delete('/:id', CatalogueItemController.deleteCatalogueItem);

export { catalogueItemRoutes };
