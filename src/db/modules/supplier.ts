import { Database } from '..';

export const SupplierDb = {
  async getSuppliers() {
    return await Database.executeQuery(
      'SELECT id, \
              pib, \
              naziv,\
              adresa, \
              email, \
              maticni_broj as "maticniBroj", \
              (tekuci_racun).naziv_banke as "nazivBanke", \
              (tekuci_racun).broj_racuna as "brojRacuna", \
              telefon \
              FROM dobavljac_view'
    );
  },
  async getSupplier(id: string) {
    return await Database.executeQuery(
      'SELECT id, \
              pib, \
              naziv,\
              adresa, \
              email, \
              maticni_broj as "maticniBroj", \
              (tekuci_racun).naziv_banke as "nazivBanke", \
              (tekuci_racun).broj_racuna as "brojRacuna", \
              telefon \
              FROM dobavljac_view WHERE id = $1',
      [id]
    );
  },
  async insertSupplier(
    id: number,
    pib: string,
    naziv: string,
    adresa: string,
    email: string,
    maticniBroj: string,
    nazivBanke: string,
    brojRacuna: string,
    telefon: string
  ) {
    return await Database.executeQuery(
      'INSERT INTO dobavljac_view(id, pib, naziv, adresa, email, maticni_broj, tekuci_racun, telefon) VALUES($1, $2, $3, $4, $5, $6, ($8, $7), $9)',
      [id, pib, naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon]
    );
  },
  async updateSupplier(
    id: number,
    pib: string,
    naziv: string,
    adresa: string,
    email: string,
    maticniBroj: string,
    nazivBanke: string,
    brojRacuna: string,
    telefon: string
  ) {
    return await Database.executeQuery(
      'UPDATE dobavljac_view SET pib = $8, \
                           naziv = $1, \
                           adresa = $2, \
                           email = $3, \
                           maticni_broj= $4, \
                           tekuci_racun = ($6, $5), \
                           telefon = $7 \
                           WHERE id = $9',
      [naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon, pib, id]
    );
  },
  async deleteSupplier(id: number) {
    return await Database.executeQuery('DELETE FROM dobavljac_view WHERE id = $1', [id]);
  },
};
