import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { Drug } from '../models/Drug';
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
      const drugs = await DrugService.getDrugs();
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
      const drug = await DrugService.getDrug(id);

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
      const drug = new Drug(
        req.body.drugId,
        req.body.dosePerPackage,
        req.body.piecesPerPackage,
        req.body.jkl,
        req.body.packageId,
        req.body.measurementUnitId
      );
      const { insertId } = await DrugService.insertDrug(drug);

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

      const drug = new Drug(
        req.body.drugId,
        req.body.dosePerPackage,
        req.body.piecesPerPackage,
        req.body.jkl,
        req.body.packageId,
        req.body.measurementUnitId
      );

      const updatedDrug = await DrugService.updateDrug(id, drug);

      return res.status(200).send({ updatedDrug });
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
