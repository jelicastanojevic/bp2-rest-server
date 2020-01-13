import { Database } from '..';

export const PriceDb = {
  async getPrices() {
    return await Database.executeQuery(
      'SELECT id_proizvoda as "idProizvoda", \
              datum_promene as "datumPromene",\
              cena  \
              FROM istorija_cena ORDER BY datum_promene DESC'
    );
  },
  async getPrice(idProizvoda: number, datumPromene: Date) {
    return await Database.executeQuery(
      'SELECT id_proizvoda as "idProizvoda", \
              datum_promene as "datumPromene",\
              cena \
              FROM istorija_cena \
              WHERE id_proizvoda = $1 AND datum_promene = $2',
      [idProizvoda, datumPromene]
    );
  },
  async insertPrice(idProizvoda: number, datumPromene: Date, cena: number) {
    if (datumPromene === null) {
      return await Database.executeQuery(
        'INSERT INTO istorija_cena(id_proizvoda, cena) VALUES($1, $2)',
        [idProizvoda, cena]
      );
    }
    return await Database.executeQuery(
      'INSERT INTO istorija_cena(id_proizvoda, datum_promene, cena) VALUES($1, $2, $3)',
      [idProizvoda, datumPromene, cena]
    );
  },
  async updatePrice(id: number, datumPromene: string, cena: number) {
    return await Database.executeQuery(
      "UPDATE istorija_cena SET cena = $1 \
                           WHERE id_proizvoda = $2 AND datum_promene::text LIKE '" +
        datumPromene +
        "%'",
      [cena, id]
    );
  },
  async deletePrice(idProizvoda: number, datumPromene: string) {
    return await Database.executeQuery(
      "DELETE FROM istorija_cena WHERE id_proizvoda = $1 AND datum_promene::text LIKE '" +
        datumPromene +
        "%'",
      [idProizvoda]
    );
  },
};
