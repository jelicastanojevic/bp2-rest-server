import { ProductDb } from '../db/modules/product';
import { Product } from '../models/Product';

export const ProductService = {
  async getDrugs() {
    return ProductDb.getProducts();
  },
  async getDrug(id: number) {
    return ProductDb.getProduct(id);
  },
  async insertDrug(product: Product) {
    return ProductDb.insertProduct(product);
  },
  async updateDrug(id: number, product: Product) {
    return ProductDb.updateProduct(id, product);
  },
  async deleteDrug(id: number): Promise<void> {
    return ProductDb.deleteProduct(id);
  },
};
