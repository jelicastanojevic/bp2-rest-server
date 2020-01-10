import * as express from 'express';

import { SupplierController } from '../controllers/SupplierController';

const supplierRoutes = express.Router();

// #region
/**
 * @api {get} / Get suppliers
 * @apiDescription Returns suppliers
 * @apiVersion 1.0.0
 * @apiGroup Supplier
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
supplierRoutes.get('/', SupplierController.getSuppliers);

supplierRoutes.get('/:id', SupplierController.getSupplier);

supplierRoutes.post('/', SupplierController.insertSupplier);

supplierRoutes.put('/:id', SupplierController.updateSupplier);

supplierRoutes.delete('/:id', SupplierController.deleteSupplier);

export { supplierRoutes };
