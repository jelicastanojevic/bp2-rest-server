export class Employee {
  constructor(
    private id: number,
    private name: string,
    private surname: string,
    private address: string,
    private email: string,
    private telephoneNumber: string,
    private jmbg: string,
    private typeOfEmployee: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  getAddress() {
    return this.address;
  }

  getEmail() {
    return this.email;
  }

  getTelephoneNumber() {
    return this.telephoneNumber;
  }

  getJmbg() {
    return this.jmbg;
  }

  getTypeOfEmployee() {
    return this.typeOfEmployee;
  }
}
