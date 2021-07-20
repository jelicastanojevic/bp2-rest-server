import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { ProductDb } from '../db/modules/product';
import { Product } from '../models/Product';

const logger = getLogger('ProductController.ts');

interface IProductController {
  getProducts: RequestHandler;
  getProduct: RequestHandler;
  insertProduct: RequestHandler;
  updateProduct: RequestHandler;
  deleteProduct: RequestHandler;
}

export const ProductController: IProductController = {
  async getProducts(req, res) {
    try {
      const products = await ProductDb.getProducts();
      const tableColumns = [
        'RB',
        'Šifra proizvoda',
        'Naziv',
        'Trenutna cena',
        'Količina',
        'Tip pakovanja',
        'Šifra fabrike',
      ];

      return res.status(200).send({ tableColumns: tableColumns, tableData: products.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertProduct(req, res) {
    try {
      const product = new Product(
        req.body.productId,
        req.body.name,
        req.body.currentPrice,
        req.body.amount,
        req.body.packageType,
        req.body.factoryId
      );
      const { insertId } = await ProductDb.insertProduct(product);

      return res.status(201).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getProduct(req, res) {
    try {
      let { id } = req.params;
      const product = await ProductDb.getProduct(id);

      return res.status(200).send({ product });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateProduct(req, res) {
    try {
      let { id } = req.params;
      const product = new Product(
        req.body.productId,
        req.body.name,
        req.body.currentPrice,
        req.body.amount,
        req.body.packageType,
        req.body.factoryId
      );
      const updatedProduct = await ProductDb.updateProduct(id, product);

      return res.status(200).send({ updatedProduct });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteProduct(req, res) {
    try {
      let { id } = req.params;
      const product = await ProductDb.deleteProduct(id);

      return res.status(200).send({ product });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
