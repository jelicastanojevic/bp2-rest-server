import { Database } from '..';

export const CatalogueItemDb = {
  async getCatalogueItems() {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              rb_stavke as "rbStavke", \
              naziv , \
              cena, \
              jm, \
              popust, \
              id_fabrike  as "idFabrike" \
       FROM stavka_kataloga'
    );
  },
  async getCatalogueItem(idKataloga: number, rbStavke: number) {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              rb_stavke as "rbStavke", \
              naziv , \
              cena, \
              jm, \
              popust, \
              id_fabrike  as "idFabrike" \
              FROM stavka_kataloga WHERE id_kataloga = $1 and rb_stavke = $2',
      [idKataloga, rbStavke]
    );
  },
  async insertCatalogueItem(
    idKataloga: number,
    rbStavke: null,
    naziv: string,
    cena: number,
    jm: string,
    popust: number,
    idFabrike: number
  ) {
    return await Database.executeQuery(
      'INSERT INTO stavka_kataloga(id_kataloga, rb_stavke, naziv, cena, jm, popust, id_fabrike) VALUES($1, $2, $3, $4, $5, $6, $7)',
      [idKataloga, rbStavke, naziv, cena, jm, popust, idFabrike]
    );
  },
  async updateCatalogueItem(
    idKataloga: number,
    rbStavke: null,
    naziv: string,
    cena: number,
    jm: string,
    popust: number,
    idFabrike: number
  ) {
    return await Database.executeQuery(
      'UPDATE stavka_kataloga SET naziv = $1, cena = $2, jm = $3, popust = $4, id_fabrike = $5 WHERE id_kataloga = $6 AND rb_stavke=$7',
      [naziv, cena, jm, popust, idFabrike, idKataloga, rbStavke]
    );
  },
  async deleteCatalogueItem(idKataloga: number, rbStavke: number) {
    return await Database.executeQuery(
      'DELETE FROM stavka_kataloga WHERE id_kataloga = $1 AND rb_stavke = $2',
      [idKataloga, rbStavke]
    );
  },
};
