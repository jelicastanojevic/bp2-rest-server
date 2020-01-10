import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { PackageDb } from '../db/modules/package';

const logger = getLogger('PackageController.ts');

interface IPackageController {
  getPackages: RequestHandler;
  getPackage: RequestHandler;
  insertPackage: RequestHandler;
  updatePackage: RequestHandler;
  deletePackage: RequestHandler;
}

export const PackageController: IPackageController = {
  async getPackages(req, res) {
    try {
      const packages = await PackageDb.getPackages();
      const tableColumns = ['RB', 'Šifra pakovanja', 'Naziv'];

      return res.status(200).send({ tableColumns: tableColumns, tableData: packages.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getPackage(req, res) {
    try {
      let { id } = req.params;
      const packagee = await PackageDb.getPackage(id);

      return res.status(200).send({ packagee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertPackage(req, res) {
    try {
      let { idTipaPakovanja, nazivTipaPakovanja } = req.body;
      const { insertId } = await PackageDb.insertPackage(idTipaPakovanja, nazivTipaPakovanja);

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updatePackage(req, res) {
    try {
      let { id } = req.params;
      let { idTipaPakovanja, nazivTipaPakovanja } = req.body;
      const packagee = await PackageDb.updatePackage(id, idTipaPakovanja, nazivTipaPakovanja);

      return res.status(200).send({ packagee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deletePackage(req, res) {
    try {
      let { id } = req.params;
      const packagee = await PackageDb.deletePackage(id);

      return res.status(200).send({ packagee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
