import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { CatalogueDb } from '../db/modules/catalogue';

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
      const catalogues = await CatalogueDb.getCatalogues();
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
      const catalogue = await CatalogueDb.getCatalogue(id);

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
      let { idKataloga, datum, rb, idDobavljaca } = req.body;
      const { insertId } = await CatalogueDb.insertCatalogue(idKataloga, datum, rb, idDobavljaca);

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateCatalogue(req, res) {
    try {
      let { id } = req.params;
      let { datum, rb, idDobavljaca } = req.body;
      const catalogue = await CatalogueDb.updateCatalogue(id, datum, rb, idDobavljaca);

      return res.status(200).send({ catalogue });
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
      const catalogue = await CatalogueDb.deleteCatalogue(id);

      return res.status(200).send({ catalogue });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
