import { Router } from 'express';

import { EmployeeController } from '../controllers/EmployeeController';

const employeeRoutes = Router();

// #region
/**
 * @api {get} / Get catalouges
 * @apiDescription Returns catalouges
 * @apiVersion 1.0.0
 * @apiGroup Catalogue
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *	[]
 */
// #endregion
employeeRoutes.get('/', EmployeeController.getEmployees);
employeeRoutes.get('/:id', EmployeeController.getEmployee);

employeeRoutes.post('/', EmployeeController.insertEmployee);

employeeRoutes.put('/:id', EmployeeController.updateEmployee);

employeeRoutes.delete('/:id', EmployeeController.deleteEmployee);

export { employeeRoutes };
