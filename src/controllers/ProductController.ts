import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { Product } from '../models/Product';
import { ProductService } from '../services/ProductService';

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
      const products = await ProductService.getProducts();
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
        req.body.id,
        req.body.name,
        req.body.currentPrice,
        req.body.amount,
        req.body.packageType,
        req.body.factoryId
      );
      const { insertId } = await ProductService.insertProduct(product);

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
      const product = await ProductService.getProduct(id);

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
        req.body.id,
        req.body.name,
        req.body.currentPrice,
        req.body.amount,
        req.body.packageType,
        req.body.factoryId
      );
      const updatedProduct = await ProductService.updateProduct(id, product);

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
      const product = await ProductService.deleteProduct(id);

      return res.status(200).send({ product });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
