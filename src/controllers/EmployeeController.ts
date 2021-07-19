import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { EmployeeDb } from '../db/modules/employee';

const logger = getLogger('EmployeeController.ts');

interface IEmployeeController {
  getEmployees: RequestHandler;
  getEmployee: RequestHandler;
  insertEmployee: RequestHandler;
  updateEmployee: RequestHandler;
  deleteEmployee: RequestHandler;
}

export const EmployeeController: IEmployeeController = {
  async getEmployees(req, res) {
    try {
      const catalogues = await EmployeeDb.getEmployees();
      const tableColumns = [
        'RB',
        'Šifra zaposlenog',
        'Ime',
        'Prezime',
        'Adresa',
        'Email',
        'Telefon',
        'JMBG',
        'Tip zaposlenog',
      ];

      return res.status(200).send({ tableColumns: tableColumns, tableData: catalogues.rows });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async getEmployee(req, res) {
    try {
      let { id } = req.params;
      const catalogue = await EmployeeDb.getEmployee(id);

      return res.status(200).send({ catalogue });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertEmployee(req, res) {
    try {
      let { idZaposlenog, ime, prezime, adresa, email, telefon, jmbg, tipZaposlenog } = req.body;
      const { insertId } = await EmployeeDb.insertEmployee(
        idZaposlenog,
        ime,
        prezime,
        adresa,
        email,
        telefon,
        jmbg,
        tipZaposlenog
      );

      return res.status(200).send({ insertId });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async updateEmployee(req, res) {
    try {
      let { id } = req.params;
      let { ime, prezime, adresa, email, telefon, jmbg, tipZaposlenog } = req.body;
      const employee = await EmployeeDb.updateEmployee(
        id,
        ime,
        prezime,
        adresa,
        email,
        telefon,
        jmbg,
        tipZaposlenog
      );

      return res.status(200).send({ employee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async deleteEmployee(req, res) {
    try {
      let { id } = req.params;
      const employee = await EmployeeDb.deleteEmployee(id);

      return res.status(200).send({ employee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
