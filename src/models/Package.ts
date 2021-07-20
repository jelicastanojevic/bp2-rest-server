export class Package {
  constructor(private id: number, private name: string) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}
