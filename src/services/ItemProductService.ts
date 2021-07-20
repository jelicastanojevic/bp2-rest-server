import { ItemProductDb } from '../db/modules/itemProduct';
import { ItemProduct } from '../models/ItemProduct';

export const ItemProductService = {
  async getItemProducts() {
    return ItemProductDb.getItemProducts();
  },
  async getItemProduct(catalogueId: number, itemSeqNum: number) {
    return ItemProductDb.getItemProduct(catalogueId, itemSeqNum);
  },
  async insertItemProduct(itemProduct: ItemProduct) {
    return ItemProductDb.insertItemProduct(itemProduct);
  },
  async updateItemProduct(itemProduct: ItemProduct) {
    return ItemProductDb.updateItemProduct(itemProduct);
  },
  async deleteItemProduct(catalogueId: number, itemSeqNum: number): Promise<void> {
    return ItemProductDb.deleteItemProduct(catalogueId, itemSeqNum);
  },
};
