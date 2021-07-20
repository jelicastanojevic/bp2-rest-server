import { StateDb } from '../db/modules/state';
import { State } from '../models/State';

export const StateService = {
  async getStates() {
    return StateDb.getStates();
  },
  async getState(productId: number, warehouseId: number, dateOfChange: string) {
    return StateDb.getState(productId, warehouseId, dateOfChange);
  },
  async insertState(state: State) {
    return StateDb.insertState(state);
  },
  async updateState(state: State) {
    return StateDb.updateState(state);
  },
  async deleteState(productId: number, warehouseId: number, dateOfChange: string): Promise<void> {
    return StateDb.deleteState(productId, warehouseId, dateOfChange);
  },
};
