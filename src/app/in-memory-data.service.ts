import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      { id: 11, name: 'Suzuki Taro', status: true },
      { id: 12, name: 'Pablo Diego José Francisco de Paula Juan Nepomuceno Cipriano de la Santísima Trinidad Ruiz Picass', status: true },
      { id: 13, name: 'Sato Hanako', status: false },
      { id: 14, name: 'Mobutu Sese Seko Kuku Ngbendu Wa Za Banga', status: false },
      { id: 15, name: 'Alexa Dimitrova', status: true }
    ];
    return {owners};
  }
}