import { CatalogueDb } from '../db/modules/catalogue';
import { Catalogue } from '../models/Catalogue';

export const CatalogueService = {
  async getCatalogues() {
    return CatalogueDb.getCatalogues();
  },
  async getCatalogue(id: number) {
    return CatalogueDb.getCatalogue(id);
  },
  async insertCatalogue(catalogue: Catalogue) {
    return CatalogueDb.insertCatalogue(catalogue);
  },
  async updateCatalogue(catalogue: Catalogue) {
    return CatalogueDb.updateCatalogue(catalogue);
  },
  async deleteCatalogue(id: number): Promise<void> {
    return CatalogueDb.deleteCatalogue(id);
  },
};
