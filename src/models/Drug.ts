export class Drug {
  constructor(
    private id: number,
    private dosePerPackage: number,
    private piecesPerPackage: number,
    private jkl: string,
    private packageId: number,
    private measurementUnitId: number
  ) {}

  getId() {
    return this.id;
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
