export class Product {
  constructor(
    private id: number,
    private name: string,
    private currentPrice: number,
    private amount: number,
    private packageType: string,
    private factoryId: number
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCurrentPrice() {
    return this.currentPrice;
  }

  getAmount() {
    return this.amount;
  }

  getPackageType() {
    return this.packageType;
  }

  getFactoryId() {
    return this.factoryId;
  }
}
