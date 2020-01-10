import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { StateDb } from '../db/modules/state';

const logger = getLogger('StateController.ts');

interface IStateController {
  getStates: RequestHandler;
  getState: RequestHandler;
  insertState: RequestHandler;
  updateState: RequestHandler;
  deleteState: RequestHandler;
}

export const StateController: IStateController = {
  async getStates(req, res) {
    try {
      const states = await StateDb.getStates();
      const tableColumns = [
        'RB',
        'Šifra proizvoda',
        'Datum promene',
        'Šifra skladišta',
        'Količina',
      ];

      console.log(states);
      return res.status(200).send({ tableColumns: tableColumns, tableData: states.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertState(req, res) {
    try {
      let { idProizvoda, idSkladisneJedinice, datumPromene, kolicina } = req.body;
      const { insertId } = await StateDb.insertState(
        idProizvoda,
        idSkladisneJedinice,
        datumPromene,
        kolicina
      );

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getState(req, res) {
    try {
      let { id } = req.params;
      let { idSkladisneJedinice, datumPromene } = req.body;
      const state = await StateDb.getState(id, idSkladisneJedinice, datumPromene);

      return res.status(200).send({ state });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateState(req, res) {
    try {
      let { id } = req.params;
      let { idSkladisneJedinice, datumPromene, cena } = req.body;
      const state = await StateDb.updateState(id, idSkladisneJedinice, datumPromene, cena);

      return res.status(200).send({ state });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteState(req, res) {
    try {
      let { id } = req.params;
      let { idSkladisneJedinice, datumPromene } = req.body;
      const state = await StateDb.deleteState(id, idSkladisneJedinice, datumPromene);

      return res.status(200).send({ state });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
