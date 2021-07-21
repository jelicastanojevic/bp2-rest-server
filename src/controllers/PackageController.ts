import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { Package } from '../models/Package';
import { PackageService } from '../services/PackageService';

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
      const packages = await PackageService.getPackages();
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
      const drugPackage = await PackageService.getPackage(id);

      return res.status(200).send({ drugPackage });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertPackage(req, res) {
    try {
      const drugPackage = new Package(req.body.id, req.body.name);
      const { insertId } = await PackageService.insertPackage(drugPackage);

      return res.status(201).send({ insertId });
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
      const drugPackage = new Package(req.body.id, req.body.name);
      const updatedPackage = await PackageService.updatePackage(id, drugPackage);

      return res.status(200).send({ updatedPackage });
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
      const drugPackage = await PackageService.deletePackage(id);

      return res.status(200).send({ drugPackage });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
