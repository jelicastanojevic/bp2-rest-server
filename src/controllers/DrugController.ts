import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { DrugDb } from '../db/modules/drug';
import { DrugService } from '../services/DrugService';

const logger = getLogger('DrugController.ts');

interface IDrugController {
  getDrugs: RequestHandler;
  getDrug: RequestHandler;
  insertDrug: RequestHandler;
  updateDrug: RequestHandler;
  deleteDrug: RequestHandler;
}

export const DrugController: IDrugController = {
  async getDrugs(req, res) {
    try {
      const drugs = await DrugDb.getDrugs();
      const tableColumns = [
        'RB',
        'Šifra leka',
        'Doza',
        'Broj komada',
        'JKL',
        'ID tipa pakovanja',
        'ID jedinice mere',
      ];

      return res.status(200).send({ tableColumns: tableColumns, tableData: drugs.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getDrug(req, res) {
    try {
      let { id } = req.params;
      const drug = await DrugDb.getDrug(id);

      return res.status(200).send({ drug });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertDrug(req, res) {
    try {
      let {
        idLeka,
        dozaPoPakovanju,
        komadPoPakovanju,
        jkl,
        idTipaPakovanja,
        idJediniceMere,
      } = req.body;
      const { insertId } = await DrugDb.insertDrug(
        idLeka,
        dozaPoPakovanju,
        komadPoPakovanju,
        jkl,
        idTipaPakovanja,
        idJediniceMere
      );

      return res.status(201).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateDrug(req, res) {
    try {
      let { id } = req.params;
      let {
        idLeka,
        dozaPoPakovanju,
        komadPoPakovanju,
        jkl,
        idTipaPakovanja,
        idJediniceMere,
      } = req.body;
      const drug = await DrugDb.updateDrug(
        id,
        idLeka,
        dozaPoPakovanju,
        komadPoPakovanju,
        jkl,
        idTipaPakovanja,
        idJediniceMere
      );

      return res.status(200).send({ drug });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteDrug(req, res) {
    try {
      let { id } = req.params;
      await DrugService.deleteDrug(id);

      return res.sendStatus(204);
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
