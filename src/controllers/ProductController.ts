import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { ProductDb } from '../db/modules/product';

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
      ];

      console.log(products);
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
      let { idProizvoda, nazivProizvoda, trenutnaCena, kolicina, nazivTipaPakovanja } = req.body;
      const { insertId } = await ProductDb.insertProduct(
        idProizvoda,
        nazivProizvoda,
        trenutnaCena,
        kolicina,
        nazivTipaPakovanja
      );

      return res.status(200).send({ insertId });
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
      let { idProizvoda, nazivProizvoda, trenutnaCena, kolicina, nazivTipaPakovanja } = req.body;
      const product = await ProductDb.updateProduct(
        id,
        idProizvoda,
        nazivProizvoda,
        trenutnaCena,
        kolicina,
        nazivTipaPakovanja
      );

      return res.status(200).send({ product });
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
