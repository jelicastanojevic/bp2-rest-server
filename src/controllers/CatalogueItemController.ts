import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { CatalogueItemDb } from '../db/modules/catalogueItem';

const logger = getLogger('CatalogueItemController.ts');

interface ICatalogueItemController {
  getCatalogueItems: RequestHandler;
  getCatalogueItem: RequestHandler;
  insertCatalogueItem: RequestHandler;
  updateCatalogueItem: RequestHandler;
  deleteCatalogueItem: RequestHandler;
}

export const CatalogueItemController: ICatalogueItemController = {
  async getCatalogueItems(req, res) {
    try {
      const catalogueItems = await CatalogueItemDb.getCatalogueItems();
      const tableColumns = [
        'RB',
        'Šifra kataloga',
        'Redni broj stavke kataloga',
        'Naziv',
        'Cena',
        'Jedinica mere',
        'Popust',
        'Šifra fabrike',
      ];

      return res.status(200).send({ tableColumns: tableColumns, tableData: catalogueItems.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getCatalogueItem(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke } = req.body;
      const catalogueItem = await CatalogueItemDb.getCatalogueItem(id, rbStavke);

      return res.status(200).send({ catalogueItem });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertCatalogueItem(req, res) {
    try {
      let { idKataloga, rbStavke, naziv, cena, jm, popust, idFabrike } = req.body;
      const { insertId } = await CatalogueItemDb.insertCatalogueItem(
        idKataloga,
        rbStavke,
        naziv,
        cena,
        jm,
        popust,
        idFabrike
      );

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateCatalogueItem(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke, naziv, cena, jm, popust, idFabrike } = req.body;
      const catalogueItem = await CatalogueItemDb.updateCatalogueItem(
        id,
        rbStavke,
        naziv,
        cena,
        jm,
        popust,
        idFabrike
      );

      return res.status(200).send({ catalogueItem });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteCatalogueItem(req, res) {
    try {
      let { id } = req.params;
      let { rbStavke } = req.body;
      const catalogueItem = await CatalogueItemDb.deleteCatalogueItem(id, rbStavke);

      return res.status(200).send({ catalogueItem });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
