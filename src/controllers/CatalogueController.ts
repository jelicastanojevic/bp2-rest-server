import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { Catalogue } from '../models/Catalogue';
import { CatalogueService } from '../services/CatalogueService';

const logger = getLogger('CatalogueController.ts');

interface ICatalogueController {
  getCatalogues: RequestHandler;
  getCatalogue: RequestHandler;
  insertCatalogue: RequestHandler;
  updateCatalogue: RequestHandler;
  deleteCatalogue: RequestHandler;
}

export const CatalogueController: ICatalogueController = {
  async getCatalogues(req, res) {
    try {
      const catalogues = await CatalogueService.getCatalogues();
      const tableColumns = [
        'RB',
        'Šifra kataloga',
        'Datum',
        'Redni broj kataloga',
        'Šifra dobavljača',
      ];

      return res.status(200).send({ tableColumns: tableColumns, tableData: catalogues.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getCatalogue(req, res) {
    try {
      let { id } = req.params;
      const catalogue = await CatalogueService.getCatalogue(id);

      return res.status(200).send({ catalogue });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertCatalogue(req, res) {
    try {
      const catalogue = new Catalogue(
        req.params.id,
        req.body.catalogueSeqNum,
        req.body.date,
        req.body.supplierId
      );
      const { insertId } = await CatalogueService.insertCatalogue(catalogue);

      return res.status(201).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateCatalogue(req, res) {
    try {
      const catalogue = new Catalogue(
        req.params.id,
        req.body.catalogueSeqNum,
        req.body.date,
        req.body.supplierId
      );
      const updatedCatalogue = await CatalogueService.updateCatalogue(catalogue);

      return res.status(200).send({ updatedCatalogue });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteCatalogue(req, res) {
    try {
      let { id } = req.params;
      const catalogue = await CatalogueService.deleteCatalogue(id);

      return res.status(200).send({ catalogue });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
