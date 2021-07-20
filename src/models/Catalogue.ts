export class Catalogue {
  constructor(
    private catalogueId: number,
    private catalogueSeqNum: number,
    private date: string,
    private supplierId: number
  ) {}

  getCatalogueId() {
    return this.catalogueId;
  }

  getCatalogueSeqNum() {
    return this.catalogueSeqNum;
  }

  getDate() {
    return this.date;
  }

  getSupplierId() {
    return this.supplierId;
  }
}
