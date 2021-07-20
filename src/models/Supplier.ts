export class Supplier {
  constructor(
    private id: number,
    private pib: string,
    private name: string,
    private address: string,
    private email: string,
    private nationalId: string,
    private bankName: string,
    private bankAccountNumber: string,
    private telephoneNumber: string
  ) {}

  getId() {
    return this.id;
  }

  getPib() {
    return this.pib;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getEmail() {
    return this.email;
  }

  getNationalId() {
    return this.nationalId;
  }

  getBankName() {
    return this.bankName;
  }

  getBankAccountNumber() {
    return this.bankAccountNumber;
  }

  getTelephoneNumber() {
    return this.telephoneNumber;
  }
}
