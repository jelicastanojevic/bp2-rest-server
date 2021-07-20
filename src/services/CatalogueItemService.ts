import { CatalogueItemDb } from '../db/modules/catalogueItem';
import { CatalogueItem } from '../models/CatalogueItem';

export const CatalogueItemService = {
  async getCatalogueItems() {
    return CatalogueItemDb.getCatalogueItems();
  },
  async getCatalogueItem(id: number, itemSeqNum: number) {
    return CatalogueItemDb.getCatalogueItem(id, itemSeqNum);
  },
  async insertCatalogueItem(catalogueItem: CatalogueItem) {
    return CatalogueItemDb.insertCatalogueItem(catalogueItem);
  },
  async updateCatalogueItem(catalogueItem: CatalogueItem) {
    return CatalogueItemDb.updateCatalogueItem(catalogueItem);
  },
  async deleteCatalogueItem(id: number, itemSeqNum: number): Promise<void> {
    return CatalogueItemDb.deleteCatalogueItem(id, itemSeqNum);
  },
};
