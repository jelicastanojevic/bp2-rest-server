import { RequestHandler } from 'express';
import { getLogger } from 'log4js';

import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/EmployeeService';

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
      const employees = await EmployeeService.getEmployees();
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

      return res.status(200).send({ tableColumns: tableColumns, tableData: employees.rows });
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
      const employee = await EmployeeService.getEmployee(id);

      return res.status(200).send({ employee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
  async insertEmployee(req, res) {
    try {
      const employee = new Employee(
        req.body.id,
        req.body.name,
        req.body.surname,
        req.body.address,
        req.body.email,
        req.body.telephoneNumber,
        req.body.jmbg,
        req.body.typeOfEmployee
      );
      const { insertId } = await EmployeeService.insertEmployee(employee);

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
      const employee = new Employee(
        req.params.id,
        req.body.name,
        req.body.surname,
        req.body.address,
        req.body.email,
        req.body.telephoneNumber,
        req.body.jmbg,
        req.body.typeOfEmployee
      );
      const updatedEmployee = await EmployeeService.updateEmployee(employee);

      return res.status(200).send({ updatedEmployee });
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
      const employee = await EmployeeService.deleteEmployee(id);

      return res.status(200).send({ employee });
    } catch (error) {
      logger.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message || 'Internal server error', error });
    }
  },
};
