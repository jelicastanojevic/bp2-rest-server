import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { PriceDb } from '../db/modules/price';

const logger = getLogger('PriceController.ts');

interface IPriceController {
  getPrices: RequestHandler;
  getPrice: RequestHandler;
  insertPrice: RequestHandler;
  updatePrice: RequestHandler;
  deletePrice: RequestHandler;
}

export const PriceController: IPriceController = {
  async getPrices(req, res) {
    try {
      const prices = await PriceDb.getPrices();
      const tableColumns = ['RB', 'Šifra proizvoda', 'Datum promene', 'Cena'];

      // console.log(prices);
      return res.status(200).send({ tableColumns: tableColumns, tableData: prices.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertPrice(req, res) {
    try {
      let { idProizvoda, datumPromene, cena } = req.body;
      const { insertId } = await PriceDb.insertPrice(idProizvoda, datumPromene, cena);

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getPrice(req, res) {
    try {
      let { id } = req.params;
      let { datumPromene } = req.body;
      const price = await PriceDb.getPrice(id, datumPromene);

      return res.status(200).send({ price });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updatePrice(req, res) {
    try {
      let { id } = req.params;
      let { datumPromene, cena } = req.body;
      let dat = datumPromene.split('.')[0];
      dat = dat.split('T')[0] + ' ' + dat.split('T')[1];
      const price = await PriceDb.updatePrice(id, dat, cena);

      return res.status(200).send({ price });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deletePrice(req, res) {
    try {
      let { id } = req.params;
      let { datumPromene } = req.body;
      let dat = datumPromene.split('.')[0];
      dat = dat.split('T')[0] + ' ' + dat.split('T')[1];

      const price = await PriceDb.deletePrice(id, dat);
      // throw Error();
      return res.status(200).send({ price });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
