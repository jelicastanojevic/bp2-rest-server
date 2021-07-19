export class Drug {
  constructor(
    private drugId: number,
    private dosePerPackage: number,
    private piecesPerPackage: number,
    private jkl: string,
    private packageId: number,
    private measurementUnitId: number
  ) {
    this.drugId = drugId;
    this.dosePerPackage = dosePerPackage;
    this.piecesPerPackage = piecesPerPackage;
    this.jkl = jkl;
    this.packageId = packageId;
    this.measurementUnitId = measurementUnitId;
  }
}
