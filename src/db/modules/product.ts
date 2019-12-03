import { Database } from '..';

export const ProductDb = {
  async getProducts() {
    return await Database.executeQuery(
      'SELECT id_proizvoda as idProizvoda, \
              naziv_proizvoda as nazivProizvoda,\
              trenutna_cena as trenutnaCena, \
              kolicina, \
              naziv_tipa_pakovanja as nazivTipaPakovanja \
              FROM proizvod'
    );
  },
  async getProduct(idProizvoda: number) {
    return await Database.executeQuery(
      'SELECT id_proizvoda as idProizvoda, \
              naziv_proizvoda as nazivProizvoda,\
              trenutna_cena as trenutnaCena, \
              kolicina, \
              naziv_tipa_pakovanja as nazivTipaPakovanja \
              FROM proizvod \
              WHERE id_proizvoda = ?',
      [idProizvoda]
    );
  },
  async insertProduct(
    idProizvoda: number,
    nazivProizvoda: string,
    trenutnaCena: number,
    kolicina: number,
    nazivTipaPakovanja: string
  ) {
    return await Database.executeQuery(
      'INSERT INTO proizvod(id_proizvoda, naziv_proizvoda, trenutna_cena, kolicina, naziv_tipa_pakovanja) VALUES(?, ?, ?, ?, ?)',
      [idProizvoda, nazivProizvoda, trenutnaCena, kolicina, nazivTipaPakovanja]
    );
  },
  async updateProduct(
    id: number,
    idProizvoda: number,
    nazivProizvoda: string,
    trenutnaCena: number,
    kolicina: number,
    nazivTipaPakovanja: string
  ) {
    return await Database.executeQuery(
      'UPDATE proizvod SET id_proizvoda = ?, \
                           naziv_proizvoda = ?, \
                           trenutna_cena = ?, \
                           kolicina= ?, \
                           naziv_tipa_pakovanja = ? \
                           WHERE id_proizvoda = ?',
      [idProizvoda, nazivProizvoda, trenutnaCena, kolicina, nazivTipaPakovanja, id]
    );
  },
  async deleteProduct(idProizvoda: number) {
    return await Database.executeQuery('DELETE FROM proizvod WHERE   id_proizvoda = ?', [
      idProizvoda,
    ]);
  },
};
