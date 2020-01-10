import { Database } from '..';

export const SupplierDb = {
  async getSuppliers() {
    return await Database.executeQuery(
      'SELECT pib, \
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
  async getSupplier(pib: string) {
    return await Database.executeQuery(
      'SELECT pib, \
              naziv,\
              adresa, \
              email, \
              maticni_broj as "maticniBroj", \
              (tekuci_racun).naziv_banke as "nazivBanke", \
              (tekuci_racun).broj_racuna as "brojRacuna", \
              telefon \
              FROM dobavljac_view WHERE pib = $1',
      [pib]
    );
  },
  async insertSupplier(
    pib: number,
    naziv: string,
    adresa: string,
    email: string,
    maticniBroj: string,
    nazivBanke: string,
    brojRacuna: string,
    telefon: string
  ) {
    return await Database.executeQuery(
      'INSERT INTO dobavljac_view(pib, naziv, adresa, email, maticni_broj, tekuci_racun, telefon) VALUES($1, $2, $3, $4, $5, ($6, $7), $8)',
      [pib, naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon]
    );
  },
  async updateSupplier(
    pib: number,
    naziv: string,
    adresa: string,
    email: string,
    maticniBroj: string,
    nazivBanke: string,
    brojRacuna: string,
    telefon: string
  ) {
    return await Database.executeQuery(
      'UPDATE dobavljac_view SET naziv = $1, \
                           adresa = $2, \
                           email = $3, \
                           maticni_broj= $4, \
                           tekuci_racun = ($5, $6) \
                           telefon = $7 \
                           WHERE pib = $8',
      [naziv, adresa, email, maticniBroj, nazivBanke, brojRacuna, telefon, pib]
    );
  },
  async deleteSupplier(pib: number) {
    return await Database.executeQuery('DELETE FROM dobavljac_view WHERE pib = $1', [pib]);
  },
};
