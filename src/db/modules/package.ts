import { Database } from '..';

export const PackageDb = {
  async getPackages() {
    return await Database.executeQuery(
      'SELECT id_tipa_pakovanja as "idTipaPakovanja", \
              naziv_tipa_pakovanja as "nazivTipaPakovanja" \
       FROM tip_pakovanja'
    );
  },
  async getPackage(idTipaPakovanja: number) {
    return await Database.executeQuery(
      'SELECT id_tipa_pakovanja as "idTipaPakovanja", \
              naziv_tipa_pakovanja as "nazivTipaPakovanja" \
       FROM tip_pakovanja WHERE id_tipa_pakovanja = $1',
      [idTipaPakovanja]
    );
  },
  async insertPackage(idTipaPakovanja: number, nazivTipaPakovanja: string) {
    return await Database.executeQuery(
      'INSERT INTO tip_pakovanja(id_tipa_pakovanja, naziv_tipa_pakovanja) VALUES($1, $2)',
      [idTipaPakovanja, nazivTipaPakovanja]
    );
  },
  async updatePackage(id: number, idTipaPakovanja: number, nazivTipaPakovanja: string) {
    return await Database.executeQuery(
      'UPDATE tip_pakovanja SET id_tipa_pakovanja = $1, naziv_tipa_pakovanja = $2 WHERE id_tipa_pakovanja = $3',
      [idTipaPakovanja, nazivTipaPakovanja, id]
    );
  },
  async deletePackage(idTipaPakovanja: number) {
    return await Database.executeQuery('DELETE FROM tip_pakovanja WHERE id_tipa_pakovanja = $1', [
      idTipaPakovanja,
    ]);
  },
};
