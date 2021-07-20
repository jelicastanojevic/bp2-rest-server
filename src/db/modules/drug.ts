import { Database } from '..';
import { HttpError } from '../../error/HttpError';
import { Drug } from '../../models/Drug';

export const DrugDb = {
  getDrugs() {
    return Database.executeQuery(
      'SELECT id_leka as "drugId", \
              doza_po_pakovanju as "dosePerPackage", \
              komad_po_pakovanju as "piecesPerPackage", \
              jkl, \
              id_tipa_pakovanja as "packageId", \
              id_jedinice_mere as "measurementUnitId" \
       FROM lek'
    );
  },
  async getDrug(id: number) {
    const drug = await Database.executeQuery(
      'SELECT id_leka as idLeka, \
              doza_po_pakovanju as "dosePerPackage", \
              komad_po_pakovanju as "piecesPerPackage", \
              jkl, \
              id_tipa_pakovanja as "packageId", \
              id_jedinice_mere as "measurementUnitId" \
       FROM lek WHERE id_leka = $1',
      [id]
    );

    if (!drug) {
      throw new HttpError(404, 'Drug not found!');
    }

    return drug;
  },
  insertDrug(drug: Drug) {
    return Database.executeQuery(
      'INSERT INTO lek(id_leka, doza_po_pakovanju, komad_po_pakovanju, jkl, id_tipa_pakovanja, id_jedinice_mere) VALUES($1, $2, $3, $4, $5, $6)',
      [
        drug.getDrugId(),
        drug.getDosePerPackage(),
        drug.getPiecesPerPackage(),
        drug.getJKL(),
        drug.getPackageId(),
        drug.getMeasurementUnitId(),
      ]
    );
  },
  async updateDrug(id: number, drug: Drug) {
    const result = await Database.executeQuery(
      'UPDATE lek SET id_leka = $1, doza_po_pakovanju = $2, komad_po_pakovanju = $3, jkl = $4, id_tipa_pakovanja = $5, id_jedinice_mere = $6 WHERE id_leka = $7',
      [
        drug.getDrugId(),
        drug.getDosePerPackage(),
        drug.getPiecesPerPackage(),
        drug.getJKL(),
        drug.getPackageId(),
        drug.getMeasurementUnitId(),
        id,
      ]
    );

    if (result.rowCount === 0) {
      throw new HttpError(404, 'Drug not found!');
    }
  },
  async deleteDrug(drugId: number) {
    const result = await Database.executeQuery('DELETE FROM lek WHERE id_leka = $1', [drugId]);

    if (result.rowCount === 0) {
      throw new HttpError(404, 'Drug not found!');
    }
  },
};
