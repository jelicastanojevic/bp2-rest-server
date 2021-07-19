export class Drug {
  constructor(
    private drugId: number,
    private dosePerPackage: number,
    private piecesPerPackage: number,
    private jkl: string,
    private packageId: number,
    private measurementUnitId: number
  ) {}

  getDrugId() {
    return this.drugId;
  }

  getDosePerPackage() {
    return this.dosePerPackage;
  }

  getPiecesPerPackage() {
    return this.piecesPerPackage;
  }

  getJKL() {
    return this.jkl;
  }

  getPackageId() {
    return this.packageId;
  }

  getMeasurementUnitId() {
    return this.measurementUnitId;
  }
}
