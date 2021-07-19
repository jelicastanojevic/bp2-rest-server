import { Database } from '..';

export const CatalogueDb = {
  async getCatalogues() {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              datum, \
              rb,  \
              id_dobavljaca as "idDobavljaca" \
       FROM katalog'
    );
  },
  async getCatalogue(idKataloga: number) {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              datum, \
              rb , \
              id_dobavljaca as "idDobavljaca"\
       FROM katalog WHERE id_kataloga = $1',
      [idKataloga]
    );
  },
  async insertCatalogue(idKataloga: number, datum: Date, rb: string, idDobavljaca: number) {
    return await Database.executeQuery(
      'INSERT INTO katalog(id_kataloga, datum, rb, id_dobavljaca) VALUES($1, $2, $3, $4)',
      [idKataloga, datum, rb, idDobavljaca]
    );
  },
  async updateCatalogue(idKataloga: number, datum: Date, rb: string, idDobavljaca: number) {
    return await Database.executeQuery(
      'UPDATE katalog SET datum = $1, rb = $2, id_dobavljaca = $3 WHERE id_kataloga = $4',
      [datum, rb, idDobavljaca, idKataloga]
    );
  },
  async deleteCatalogue(idKataloga: number) {
    return await Database.executeQuery('DELETE FROM katalog WHERE id_kataloga = $1', [idKataloga]);
  },
};
