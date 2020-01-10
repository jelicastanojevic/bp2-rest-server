import { Database } from '..';

export const DrugDb = {
  async getDrugs() {
    return await Database.executeQuery(
      'SELECT id_leka as "idLeka", \
              doza_po_pakovanju as "dozaPoPakovanju", \
              komad_po_pakovanju as "komadPoPakovanju", \
              jkl, \
              id_tipa_pakovanja as "idTipaPakovanja", \
              id_jedinice_mere as "idJediniceMere" \
       FROM lek'
    );
  },
  async getDrug(idLeka: number) {
    return await Database.executeQuery(
      'SELECT id_leka as idLeka, \
              doza_po_pakovanju as "dozaPoPakovanju", \
              komad_po_pakovanju as "komadPoPakovanju", \
              jkl, \
              id_tipa_pakovanja as "idTipaPakovanja", \
              id_jedinice_mere as "idJediniceMere" \
       FROM lek WHERE id_leka = $1',
      [idLeka]
    );
  },
  async insertDrug(
    idLeka: number,
    dozaPoPakovanju: number,
    komadPoPakovanju: number,
    jkl: string,
    idTipaPakovanja: number,
    idJediniceMere: number
  ) {
    return await Database.executeQuery(
      'INSERT INTO lek(id_leka, doza_po_pakovanju, komad_po_pakovanju, jkl, id_tipa_pakovanja, id_jedinice_mere) VALUES($1, $2, $3, $4, $5, $6)',
      [idLeka, dozaPoPakovanju, komadPoPakovanju, jkl, idTipaPakovanja, idJediniceMere]
    );
  },
  async updateDrug(
    id: number,
    idLeka: number,
    dozaPoPakovanju: number,
    komadPoPakovanju: number,
    jkl: string,
    idTipaPakovanja: number,
    idJediniceMere: number
  ) {
    return await Database.executeQuery(
      'UPDATE lek SET id_leka = $1, doza_po_pakovanju = $2, komad_po_pakovanju = $3, jkl = $4, id_tipa_pakovanja = $5, id_jedinice_mere = $6 WHERE id_leka = $7',
      [idLeka, dozaPoPakovanju, komadPoPakovanju, jkl, idTipaPakovanja, idJediniceMere, id]
    );
  },
  async deleteDrug(idLeka: number) {
    return await Database.executeQuery('DELETE FROM lek WHERE id_leka = $1', [idLeka]);
  },
};
