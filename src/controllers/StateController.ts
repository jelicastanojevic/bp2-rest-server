import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { StateDb } from '../db/modules/state';
import { State } from '../models/State';

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
      const state = new State(
        req.body.productId,
        req.body.warehouseId,
        req.body.dateOfChange,
        req.body.amount
      );
      const { insertId } = await StateDb.insertState(state);

      return res.status(201).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getState(req, res) {
    try {
      let { productId } = req.params;
      let { warehouseId, dateOfChange } = req.body;
      const state = await StateDb.getState(productId, warehouseId, dateOfChange);

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
      const state = new State(
        req.params.productId,
        req.body.warehouseId,
        req.body.dateOfChange,
        req.body.amount
      );
      const updatedState = await StateDb.updateState(state);

      return res.status(200).send({ updatedState });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteState(req, res) {
    try {
      let { productId } = req.params;
      let { warehouseId, dateOfChange } = req.body;
      const state = await StateDb.deleteState(productId, warehouseId, dateOfChange);

      return res.status(200).send({ state });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
