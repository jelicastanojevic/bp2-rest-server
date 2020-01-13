import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { ItemProductDb } from '../db/modules/itemProduct';

const logger = getLogger('ItemProductController.ts');

interface IItemProductController {
  getItemProducts: RequestHandler;
  getItemProduct: RequestHandler;
  insertItemProduct: RequestHandler;
  updateItemProduct: RequestHandler;
  deleteItemProduct: RequestHandler;
}

export const ItemProductController: IItemProductController = {
  async getItemProducts(req, res) {
    try {
      const itemProducts = await ItemProductDb.getItemProducts();
      const tableColumns = ['RB', 'Šifra kataloga', 'Redni broj stavke', 'Šifra proizvoda'];

      return res.status(200).send({ tableColumns: tableColumns, tableData: itemProducts.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getItemProduct(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke } = req.body;
      const itemProduct = await ItemProductDb.getItemProduct(id, rbStavke);

      return res.status(200).send({ itemProduct });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertItemProduct(req, res) {
    try {
      let { idKataloga, rbStavke, idProizvoda } = req.body;
      const { insertId } = await ItemProductDb.insertItemProduct(idKataloga, rbStavke, idProizvoda);

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateItemProduct(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke, idProizvoda } = req.body;
      const itemProduct = await ItemProductDb.updateItemProduct(id, rbStavke, idProizvoda);

      return res.status(200).send({ itemProduct });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteItemProduct(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke } = req.body;
      const itemProduct = await ItemProductDb.deleteItemProduct(id, rbStavke);

      return res.status(200).send({ itemProduct });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
