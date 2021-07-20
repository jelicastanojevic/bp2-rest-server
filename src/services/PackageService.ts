import { PackageDb } from '../db/modules/package';
import { Package } from '../models/Package';

export const PackageService = {
  async getPackages() {
    return PackageDb.getPackages();
  },
  async getPackage(id: number) {
    return PackageDb.getPackage(id);
  },
  async insertPackage(drugPackage: Package) {
    return PackageDb.insertPackage(drugPackage);
  },
  async updatePackage(id: number, drugPackage: Package) {
    return PackageDb.updatePackage(id, drugPackage);
  },
  async deletePackage(id: number): Promise<void> {
    return PackageDb.deletePackage(id);
  },
};
