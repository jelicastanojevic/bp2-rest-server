import { Database } from '..';

export const DrugDb = {
  async getDrugs() {
    return await Database.executeQuery(
      'SELECT id_leka as idLeka, \
              doza_po_pakovanju as dozaPoPakovanju, \
              komad_po_pakovanju as komadPoPakovanju, \
              jkl, \
              id_tipa_pakovanja as idTipaPakovanja, \
              id_jedinice_mere as idJediniceMere \
       FROM lek'
    );
  },
  async getDrug(idLeka: number) {
    return await Database.executeQuery(
      'SELECT id_leka as idLeka, \
              doza_po_pakovanju as dozaPoPakovanju, \
              komad_po_pakovanju as komadPoPakovanju, \
              jkl, \
              id_tipa_pakovanja as idTipaPakovanja, \
              id_jedinice_mere as idJediniceMere \
       FROM lek WHERE id_leka = ?',
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
      'INSERT INTO lek(id_leka, doza_po_pakovanju, komad_po_pakovanju, jkl, id_tipa_pakovanja, id_jedinice_mere) VALUES(?, ?, ?, ?, ?, ?)',
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
      'UPDATE lek SET id_leka = ?, doza_po_pakovanju = ?, komad_po_pakovanju = ?, jkl = ?, id_tipa_pakovanja = ?, id_jedinice_mere = ? WHERE id_leka = ?',
      [idLeka, dozaPoPakovanju, komadPoPakovanju, jkl, idTipaPakovanja, idJediniceMere, id]
    );
  },
  async deleteDrug(idLeka: number) {
    return await Database.executeQuery('DELETE FROM lek WHERE id_leka = ?', [idLeka]);
  },
};
