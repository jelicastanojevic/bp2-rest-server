import { Database } from '..';

export const ItemProductDb = {
  async getItemProducts() {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              rb_stavke as "rbStavke", \
              id_proizvoda as "idProizvoda" \
       FROM stavka_proizvod'
    );
  },
  async getItemProduct(idKataloga: number, rbStavke: number) {
    return await Database.executeQuery(
      'SELECT id_kataloga as "idKataloga", \
              rb_stavke as "rbStavke", \
              id_proizvoda as "idProizvoda" \
              FROM stavka_proizvod WHERE id_kataloga = $1 and rb_stavke = $2',
      [idKataloga, rbStavke]
    );
  },
  async insertItemProduct(idKataloga: number, rbStavke: number, idProizvoda: number) {
    return await Database.executeQuery(
      'INSERT INTO stavka_proizvod(id_kataloga, rb_stavke, id_proizvoda) VALUES($1, $2, $3)',
      [idKataloga, rbStavke, idProizvoda]
    );
  },
  async updateItemProduct(idKataloga: number, rbStavke: number, idProizvoda: number) {
    return await Database.executeQuery(
      'UPDATE stavka_proizvod SET id_proizvoda = $1 WHERE id_kataloga = $2 AND rb_stavke=$3',
      [idProizvoda, idKataloga, rbStavke]
    );
  },
  async deleteItemProduct(idKataloga: number, rbStavke: number) {
    return await Database.executeQuery(
      'DELETE FROM stavka_proizvod WHERE id_kataloga = $1 AND rb_stavke = $2',
      [idKataloga, rbStavke]
    );
  },
};
