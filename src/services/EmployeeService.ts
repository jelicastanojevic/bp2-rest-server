import { EmployeeDb } from '../db/modules/employee';
import { Employee } from '../models/Employee';

export const EmployeeService = {
  async getEmployees() {
    return EmployeeDb.getEmployees();
  },
  async getEmployee(id: number) {
    return EmployeeDb.getEmployee(id);
  },
  async insertEmployee(employee: Employee) {
    return EmployeeDb.insertEmployee(employee);
  },
  async updateEmployee(employee: Employee) {
    return EmployeeDb.updateEmployee(employee);
  },
  async deleteEmployee(id: number): Promise<void> {
    return EmployeeDb.deleteEmployee(id);
  },
};
