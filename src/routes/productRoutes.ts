import * as express from 'express';

import { ProductController } from '../controllers/ProductController';

const productRoutes = express.Router();

// #region
/**
 * @api {get} / Get products
 * @apiDescription Returns products
 * @apiVersion 1.0.0
 * @apiGroup Product
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
productRoutes.get('/', ProductController.getProducts);

productRoutes.get('/:id', ProductController.getProduct);

productRoutes.post('/', ProductController.insertProduct);

productRoutes.put('/:id', ProductController.updateProduct);

productRoutes.delete('/:id', ProductController.deleteProduct);

export { productRoutes };
