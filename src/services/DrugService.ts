import { DrugDb } from '../db/modules/drug';

export const DrugService = {
  async deleteDrug(id: number): Promise<void> {
    return DrugDb.deleteDrug(id);
  },
};
