export class Price {
  constructor(private productId: number, private dateOfChange: string, private price: number) {}

  getProductId() {
    return this.productId;
  }

  getDateOfChange() {
    return this.dateOfChange;
  }

  getPrice() {
    return this.price;
  }
}
