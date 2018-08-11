import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      { id: 11, name: 'Suzuki Taro', status: true },
      { id: 12, name: 'Sato Hanako', status: false },
      { id: 13, name: 'Alexa Dimitrova', status: true }
    ];
    return {owners};
  }
}