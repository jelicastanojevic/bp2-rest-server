import * as express from 'express';

import { PackageController } from '../controllers/PackageController';

const packageRoutes = express.Router();

// #region
/**
 * @api {get} / Get packages
 * @apiDescription Returns types of packages
 * @apiVersion 1.0.0
 * @apiGroup Package
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
packageRoutes.get('/', PackageController.getPackages);
packageRoutes.get('/:id', PackageController.getPackage);

packageRoutes.post('/', PackageController.insertPackage);
packageRoutes.put('/:id', PackageController.updatePackage);
packageRoutes.delete('/:id', PackageController.deletePackage);

export { packageRoutes };
