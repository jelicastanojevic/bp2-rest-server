import { Database } from '..';

export const EmployeeDb = {
  async getEmployees() {
    return await Database.executeQuery(
      'SELECT id as "idZaposlenog", \
              ime, \
              prezime,  \
              adresa, \
              email, \
              telefon, \
              jmbg, \
              tip_zaposlenog as "tipZaposlenog" \
       FROM zaposleni'
    );
  },
  async getEmployee(idZaposlenog: number) {
    return await Database.executeQuery(
      'SELECT id as "idZaposlenog", \
              ime, \
              prezime,  \
              adresa, \
              email, \
              telefon, \
              jmbg, \
              tip_zaposlenog as "tipZaposlenog" \
       FROM zaposleni WHERE id = $1',
      [idZaposlenog]
    );
  },
  async insertEmployee(
    idZaposlenog: number,
    ime: string,
    prezime: string,
    adresa: string,
    email: string,
    telefon: string,
    jmbg: string,
    tipZaposlenog: string
  ) {
    return await Database.executeQuery(
      'INSERT INTO zaposleni(id, ime, prezime, adresa, email, telefon, jmbg, tip_zaposlenog) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
      [idZaposlenog, ime, prezime, adresa, email, telefon, jmbg, tipZaposlenog]
    );
  },
  async updateEmployee(
    idZaposlenog: number,
    ime: string,
    prezime: string,
    adresa: string,
    email: string,
    telefon: string,
    jmbg: string,
    tipZaposlenog: string
  ) {
    return await Database.executeQuery(
      'UPDATE zaposleni SET ime = $1, prezime = $2, id_dobavljaca = $3, email = $4, telefon = $5, jmbg = $6, tip_zaposlenog = $7 WHERE id_kataloga = $8',
      [ime, prezime, adresa, email, telefon, jmbg, tipZaposlenog, idZaposlenog]
    );
  },
  async deleteEmployee(idZaposlenog: number) {
    return await Database.executeQuery('DELETE FROM zaposleni WHERE id = $1', [idZaposlenog]);
  },
};
