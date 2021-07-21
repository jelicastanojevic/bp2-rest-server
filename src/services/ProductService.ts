import { ProductDb } from '../db/modules/product';
import { Product } from '../models/Product';

export const ProductService = {
  async getProducts() {
    return ProductDb.getProducts();
  },
  async getProduct(id: number) {
    return ProductDb.getProduct(id);
  },
  async insertProduct(product: Product) {
    return ProductDb.insertProduct(product);
  },
  async updateProduct(id: number, product: Product) {
    return ProductDb.updateProduct(id, product);
  },
  async deleteProduct(id: number): Promise<void> {
    return ProductDb.deleteProduct(id);
  },
};
