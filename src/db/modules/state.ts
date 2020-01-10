import { Database } from '..';

export const StateDb = {
  async getStates() {
    return await Database.executeQuery(
      'SELECT id_proizvoda as "idProizvoda", \
              id_skladisne_jedinice as "idSkladisneJedinice",\
              datum_promene as "datumPromene",\
              kolicina \
              FROM stanje'
    );
  },
  async getState(idProizvoda: number, idSkladisneJedinice: number, datumPromene: Date) {
    return await Database.executeQuery(
      'SELECT id_proizvoda as "idProizvoda", \
              id_skladisne_jedinice as "idSkladisneJedinice",\
              datum_promene as "datumPromene",\
              kolicina \
              FROM stanje\
              WHERE id_proizvoda = $1 AND id_skladisne_jedinice = $2 AND datum_promene = $3',
      [idProizvoda, idSkladisneJedinice, datumPromene]
    );
  },
  async insertState(
    idProizvoda: number,
    idSkladisneJedinice: number,
    datumPromene: Date,
    kolicina: number
  ) {
    return await Database.executeQuery(
      'INSERT INTO stanje(id_proizvoda, id_skladisne_jedinice, datum_promene, kolicina) VALUES($1, $2, $3, $4)',
      [idProizvoda, idSkladisneJedinice, datumPromene, kolicina]
    );
  },
  async updateState(
    id: number,
    idSkladisneJedinice: number,
    datumPromene: string,
    kolicina: number
  ) {
    return await Database.executeQuery(
      'UPDATE stanje SET  kolicina = $1, \
                           WHERE id_proizvoda = $2 and id_skladisne_jedinice = $3 and datum_promene = $4',
      [kolicina, id, idSkladisneJedinice, datumPromene]
    );
  },
  async deleteState(idProizvoda: number, idSkladisneJedinice: number, datumPromene: string) {
    return await Database.executeQuery(
      'DELETE FROM stanje WHERE id_proizvoda = $1 and id_skladisne_jedinice = $2 and datum_promene = $3',
      [idProizvoda, idSkladisneJedinice, datumPromene]
    );
  },
};
