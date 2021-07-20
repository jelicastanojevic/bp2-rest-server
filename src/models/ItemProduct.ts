export class ItemProduct {
  constructor(private catalogueId: number, private itemSeqNum: number, private productId: number) {}

  getCatalogueId() {
    return this.catalogueId;
  }

  getItemSeqNum() {
    return this.itemSeqNum;
  }

  getProductId() {
    return this.productId;
  }
}
