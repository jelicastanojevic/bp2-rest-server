import { DrugDb } from '../db/modules/drug';
import { Drug } from '../models/Drug';

export const DrugService = {
  async getDrugs() {
    return DrugDb.getDrugs();
  },
  async getDrug(id: number) {
    return DrugDb.getDrug(id);
  },
  async insertDrug(drug: Drug) {
    return DrugDb.insertDrug(drug);
  },
  async updateDrug(id: number, drug: Drug) {
    return DrugDb.updateDrug(id, drug);
  },
  async deleteDrug(id: number): Promise<void> {
    return DrugDb.deleteDrug(id);
  },
};
