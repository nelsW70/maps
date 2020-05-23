import { Mappable } from './CustomMap';
import faker from 'faker';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h4>Company Name: ${this.companyName}</h4>
      <h4>Catchphrase: ${this.catchPhrase}</h4>
    </div>
    `;
  }
}
