import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';
import { Routes } from '../models/routes';

export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        name: 'Stojan',
        surname: 'Celevski',
        phone_number: '077983782',
        dateOfBirth: '30-08-1996',
        sex: 'M',
        email: 'stojan.celevski@gmail.com',
        password: '123456',
        driver: true,
        carType: 'Seat Cordoba',
        registrationPlate: 'SU 1234 AB'
      },
      {
        id: 1,
        name: 'Mile',
        surname: 'Trendafiloski',
        phone_number: '077123456',
        dateOfBirth: '01-05-1995',
        sex: 'M',
        email: 'mile_trendafiloski@gmail.com',
        password: '123456',
        driver: false,
        carType: null,
        registrationPlate: null
      },
    ];
    const routes: Routes[] = [
      {
        id: 1,
        from: 'Struga',
        to: 'Skopje',
        date: '08-08-2019'
      },
      {
        id: +1,
        from: 'Ohrid',
        to: 'Bitola',
        date: '25-07-2019'
      },
      {
        id: +1,
        from: 'Kicevo',
        to: 'Prilep',
        date: '05-09-2019'
      },
    ];
    return {
      users, routes
    };
  }
}
