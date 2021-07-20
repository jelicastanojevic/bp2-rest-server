export class CatalogueItem {
  constructor(
    private catalogueId: number,
    private catalogueItemSeqNum: number,
    private name: string,
    private price: number,
    private measurementUnit: string,
    private discount: number,
    private factoryId: number
  ) {}

  getCatalogueId() {
    return this.catalogueId;
  }

  getCatalogueItemSeqNum() {
    return this.catalogueItemSeqNum;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getMeasurementUnit() {
    return this.measurementUnit;
  }

  getDiscount() {
    return this.discount;
  }

  getFactoryId() {
    return this.factoryId;
  }
}
