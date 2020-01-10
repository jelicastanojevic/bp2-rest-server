import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { SupplierDb } from '../db/modules/supplier';

const logger = getLogger('SupplierController.ts');

interface ISupplierController {
  getSuppliers: RequestHandler;
  getSupplier: RequestHandler;
  insertSupplier: RequestHandler;
  updateSupplier: RequestHandler;
  deleteSupplier: RequestHandler;
}

export const SupplierController: ISupplierController = {
  async getSuppliers(req, res) {
    try {
      const suppliers = await SupplierDb.getSuppliers();
      const tableColumns = [
        'RB',
        'PIB',
        'Naziv',
        'Adresa',
        'Email',
        'Matični Broj',
        'Naziv Banke',
        'Broj Računa',
        'Telefon',
      ];

      console.log(suppliers);
      return res.status(200).send({ tableColumns: tableColumns, tableData: suppliers.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertSupplier(req, res) {
    try {
      let { pib, naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon } = req.body;
      const { insertId } = await SupplierDb.insertSupplier(
        pib,
        naziv,
        adresa,
        email,
        maticniBroj,
        nazivBanke,
        brojRacuna,
        telefon
      );

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getSupplier(req, res) {
    try {
      let { id } = req.params;
      const supplier = await SupplierDb.getSupplier(id);

      return res.status(200).send({ supplier });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateSupplier(req, res) {
    try {
      let { id } = req.params;
      let { naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon } = req.body;
      const supplier = await SupplierDb.updateSupplier(
        id,
        naziv,
        adresa,
        email,
        maticniBroj,
        nazivBanke,
        brojRacuna,
        telefon
      );

      return res.status(200).send({ supplier });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteSupplier(req, res) {
    try {
      let { id } = req.params;
      const supplier = await SupplierDb.deleteSupplier(id);

      return res.status(200).send({ supplier });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
